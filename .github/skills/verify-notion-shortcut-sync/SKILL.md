---
name: verify-notion-shortcut-sync
description: 'Verify consistency between the Notion "Shortcut Assignment" database and local shortcut data files (src/renderer/src/data/shortcut/*.ts). Use when: user asks to check/compare/sync Notion vs local shortcuts, mentions shortcut consistency, or after adding/changing shortcuts to verify both sides match. Produces a diff report of key-binding mismatches and naming differences.'
argument-hint: '[--update-md] (optionally write report to Tmp/)'
---

# Verify Notion ↔ Local Shortcut Sync

Compare the Notion **Shortcut Assignment** database against the local shortcut data files, and report differences. **Default is read-only** — never modify Notion rows or local data files unless the user explicitly asks.

## When to Use

- User asks to "check / 核对 / 比对 / verify" Notion vs local shortcuts
- After adding or rebinding shortcuts on either side
- User mentions the Shortcut Assignment Notion database

## Key Inputs

| Item               | Value                                                        |
| ------------------ | ------------------------------------------------------------ |
| Notion database    | https://app.notion.com/p/1d6dacc254258083b726e897acc31c8a    |
| Notion data source | `collection://1d6dacc2-5425-8018-a73c-000b143710ef`          |
| Local data         | `src/renderer/src/data/shortcut/*.ts`                        |
| Report output      | `Tmp/notion-vs-local-shortcut-diff.md` (or a new dated file) |

## Procedure

### Step 1: Fetch Notion rows

Call `mcp_notion_mcp_notion-query-data-sources` with:

```json
{
  "mode": "rows",
  "data_source_url": "collection://1d6dacc2-5425-8018-a73c-000b143710ef",
  "limit": 100
}
```

If the tool is "currently disabled", activate the Notion tool group first, then retry with identical arguments. The result is written to a `content.json` file — note its path for Step 3.

### Step 2: Extract local data

Parse every `src/renderer/src/data/shortcut/*.ts`:

- Strip line comments first (`//.*`) so commented-out bindings are ignored
- Match object literals containing `keys: [[...]]` (bindings array)
- Read `const tool = '...'` as the file-level default tool
- Fields: `actionName`, `tool`, `keys`, `builtIn`, `raycastExtension`

### Step 3: Normalize both sides and diff

Run the comparison script in [scripts/compare.py](./scripts/compare.py) — it takes the Notion `content.json` path as argument:

```bash
python3 .github/skills/verify-notion-shortcut-sync/scripts/compare.py <notion-content.json>
```

The script normalizes:

- **Local**: `KeyCode.X` + modifier list → `(key, mods)`; `['cmd','cmd']` style → double binding with optional side
- **Notion**: `Key` multi-select + `Control/Option/Shift/Command` checkboxes → `(key, mods)`; `Deprecated` rows flagged
- **Key name mapping**: `TILDE→Backtick`, `BACKSLASH→Back Slash`, `BACKSPACE→Delete`, `ENTER→Return`, arrows→`Up/Down/Left/Right`, digits `ONE→1` … `ZERO→0`

It prints four sections:

- **A. 本地有、Notion 无**（排除 builtIn）
- **B. Notion 有、本地无**（标注 DEPRECATED）
- **C. 同组合但动作名不同**（排除 builtIn）
- **D. 同名动作但组合不同**

### Step 4: Classify and report

Sort findings into four buckets (in this order):

1. **实质键位分歧** — same action, different combo on both sides → needs user decision
2. **Notion 过时** — local is newer (e.g. double bindings, renamed actions) → user updates Notion
3. **本地缺失/多余** — missing or extra entries → user decides which side is right
4. **仅命名差异** — same key, same meaning, different wording → non-issue, list separately

Known conventions when classifying:

- **Double bindings** (`['cmd','cmd']`, `['left_shift','left_shift']`) have no Notion equivalent — always report as "本地有、Notion 无（概念缺失）" and skip unless user asks
- **builtIn shortcuts** (system built-ins in `builtIn.ts`) are excluded from "local-only" findings
- **Deprecated** Notion rows are excluded from "Notion-only" findings
- Modifier order is Apple HIG: `control → option → shift → command`

### Step 5: Output

- Default: print the report in chat (Chinese)
- With `--update-md` argument or on request: write to `Tmp/notion-vs-local-shortcut-diff.md` (check existing file first — the user may have annotated it with decision comments; preserve their annotations)

## Rules

- **Read-only by default**: do not update Notion pages or local files as part of verification
- **Preserve user annotations**: the diff md may contain user decision comments like `(User fixed in notion)`, `(Ignore, it's fine)` — never overwrite them
- **Notion row update format** (only when user explicitly asks to sync): `update_properties` with `{"Command": "__YES__"|"__NO__", "Control": ..., "Option": ..., "Shift": ..., "Key": ["H"]}` — Key values use Notion's option names (`Backtick`, `Back Slash`, `Left Bracket`, `Return`, `Space`, …)
- **Local data format**: `keys: [[KeyCode.X, 'control', 'option']]` — bindings array, HIG modifier order
