---
name: add-raycast-shortcut
description: 'Add a Raycast extension shortcut to the visualizer. Use when: user provides a Raycast extension path, wants to register a new shortcut, or mentions adding a shortcut with a Raycast extension. Finds the extension icon, copies it, and creates the shortcut entry.'
argument-hint: '<extension-path> <keybinding> <action-name>'
---

# Add Raycast Shortcut

Register a new Raycast extension shortcut in the Shortcut Assignment Visualizer.

## When to Use

- User provides a path to a Raycast extension (e.g., `/Users/.../.config/raycast/extensions/<uuid>/`)
- User wants to add a new shortcut backed by a Raycast extension
- User mentions "add shortcut", "register shortcut", or "new shortcut"

## Procedure

### Step 1: Read Extension Metadata

Read the `package.json` at the provided extension path to extract:

- **name**: Extension identifier (e.g., `git-repos`, `imessage-2fa`)
- **title**: Human-readable name (e.g., `Git Repos`, `2FA Code Finder`)
- **icon**: Icon filename (e.g., `icon.png`, `git-repos-icon.png`)

```bash
cat <extension-path>/package.json | jq '{name, title, icon}'
```

### Step 2: Copy Icon to Project Assets

Copy the icon from the extension's `assets/` directory to the project:

```bash
cp <extension-path>/assets/<icon-filename> src/renderer/src/assets/<PascalCaseName>.png
```

**Naming convention**: Convert the extension name to PascalCase:

- `git-repos` → `GitRepos.png`
- `imessage-2fa` → `iMessage.png`
- `hammerwm` → `HammerWM.png`

If the icon is `.icns`, convert to `.png` first:

```bash
sips -s format png "<source>.icns" --out src/renderer/src/assets/<Name>.png
```

### Step 3: Create Shortcut File

Create a new file at `src/renderer/src/data/shortcut/<camelCaseName>.ts`:

```typescript
import <Name>Icon from '@renderer/assets/<PascalCaseName>.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const <camelCaseName>ShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.<KEY>, '<modifier1>', '<modifier2>'],
    toolIcon: <Name>Icon,
    tool: '<Extension Title>',
    actionName: '<Action Description>',
  },
];
```

**Modifier order** (Apple HIG): `control` → `option` → `shift` → `command`

### Step 4: Register in shortcut.ts

Add the import and spread to `src/renderer/src/data/shortcut.ts`:

```typescript
import { <camelCaseName>ShortcutList } from './shortcut/<camelCaseName>';
```

Add to the `shortcutListData` array (alphabetical order by convention):

```typescript
  ...<camelCaseName>ShortcutList,
```

### Step 5: For Raycast Extensions Specifically

If the shortcut is a **Raycast extension** (not a standalone app), add it to `src/renderer/src/data/shortcut/raycast.ts` instead:

- Use `toolIcon: RaycastIcon` (always the Raycast icon for the key badge)
- Use `raycastExtensionIcon: <Name>Icon` (the extension's own icon for tooltips)
- Add to `customExtensionShortcuts` array

```typescript
  {
    keys: [KeyCode.<KEY>, '<modifier1>', '<modifier2>'],
    toolIcon: RaycastIcon,
    tool: 'Raycast',
    actionName: '<Action Description>',
    raycastExtension: '<Extension Title>',
    raycastExtensionIcon: <Name>Icon,
  },
```

### Step 6: Verify

Run type check to ensure no errors:

```bash
pnpm type-check:web
```

## Key Files

| File                                        | Purpose                      |
| ------------------------------------------- | ---------------------------- |
| `src/renderer/src/data/shortcut.ts`         | Master list of all shortcuts |
| `src/renderer/src/data/shortcut/raycast.ts` | Raycast extension shortcuts  |
| `src/renderer/src/data/shortcut/<app>.ts`   | Per-app shortcut files       |
| `src/renderer/src/assets/`                  | Icon assets                  |
| `src/renderer/src/types/keyCode.ts`         | Available KeyCode values     |
| `src/renderer/src/types/shortcut.ts`        | Shortcut type definition     |

## KeyCode Reference

Common KeyCode values: `A`-`Z`, `ONE`-`NINE`, `ZERO`, `SPACE`, `TAB`, `ENTER`, `ESC`, `BACKSPACE`, `COMMA`, `PERIOD`, `SEMICOLON`, `QUOTE`, `SLASH`, `LEFT_BRACKET`, `RIGHT_BRACKET`, `MINUS`, `EQUALS`, `BACKSLASH`, `TILDE`, `ARROW_UP`, `ARROW_DOWN`, `ARROW_LEFT`, `ARROW_RIGHT`

## Examples

### Adding a standalone app shortcut

```
User: /add-raycast-shortcut ~/path/to/extension Cmd+Ctrl+R "Reasonable"
```

### Adding a Raycast extension shortcut

```
User: /add-raycast-shortcut ~/.config/raycast/extensions/abc-123/ Ctrl+Option+G "List Repos"
```

### From conversation context

User provides extension path → Agent reads package.json → Copies icon → Creates shortcut file → Registers in shortcut.ts
