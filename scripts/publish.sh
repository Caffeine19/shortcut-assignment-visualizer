#!/bin/zsh
# Publish — build, zip, and create a GitHub Release in one command
# Usage: ./scripts/publish.sh 1.1.0
set -e
cd "$(dirname "$0")/.."

TAG="${1:?⚠️ Usage: ./scripts/publish.sh 1.1.0}"

# Version must be semver (optional prerelease suffix allowed)
if ! [[ "$TAG" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$ ]]; then
    echo "⚠️ Invalid version \"$TAG\" (expected semver, e.g. 1.1.0)"
    exit 1
fi

# Tag must not exist yet
if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null; then
    echo "⚠️ Tag $TAG already exists"
    exit 1
fi

# Working tree must be clean so the release commit only contains package.json
if [[ -n "$(git status --porcelain)" ]]; then
    echo "⚠️ Working tree is dirty. Commit or stash your changes first."
    exit 1
fi

gh auth status >/dev/null 2>&1 || {
    echo "⚠️ Not logged in. Run: gh auth login"
    exit 1
}

# Bump version in package.json (artifact names embed ${version})
npm pkg set version="$TAG"

echo "▶ Building..."
pnpm type-check
pnpm exec electron-vite build
pnpm exec electron-builder --mac dmg --publish never

# Locate the built .app (e.g. dist/mac-arm64/Shortcut Assignment Visualizer.app)
APP=(dist/mac-*/*.app(N))
if (( ${#APP} != 1 )); then
    echo "⚠️ Expected exactly one .app under dist/mac-*, found ${#APP}"
    exit 1
fi
ARCH_DIR="${APP:h:t}" # e.g. mac-arm64

DMG="dist/shortcut-assignment-visualizer-$TAG.dmg"
ZIP="dist/shortcut-assignment-visualizer-$TAG-$ARCH_DIR.zip"

# Zip the .app for distribution
ditto -c -k --keepParent "$APP" "$ZIP"

for f in "$DMG" "$ZIP"; do
    if [[ ! -f "$f" ]]; then
        echo "⚠️ Missing artifact: $f"
        exit 1
    fi
done

# Commit, tag, and push (must push before gh release create,
# otherwise the tag would be created on the wrong commit)
git add package.json
git commit -m ":bookmark: Release $TAG"
git tag -a "$TAG" -m "Release $TAG"
git push origin HEAD
git push origin "$TAG"

gh release create "$TAG" "$DMG" "$ZIP" --generate-notes

echo ""
echo "🎉 Release $TAG published!"
gh release view "$TAG"
