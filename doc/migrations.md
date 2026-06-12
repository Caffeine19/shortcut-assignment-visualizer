# Shortcut Migrations

## 2026-06-10 Modifier Key Reassignment

### 1. `Ctrl+Option` → `Option`

Changed all shortcuts using `Ctrl+Option` modifier to use `Option` only (except ChatGPT).

| App                                  | Action                       | Before                | After            |
| ------------------------------------ | ---------------------------- | --------------------- | ---------------- |
| Raycast                              | Mirror Screen                | `Ctrl+Option+M`       | `Option+M`       |
| Raycast (Zentao)                     | Search My Tasks              | `Ctrl+Option+Z`       | `Option+Z`       |
| Raycast (Restart Without Reopen)     | Restart Without Reopen       | `Ctrl+Option+Q`       | `Option+Q`       |
| Raycast (Toothpick)                  | Manage Bluetooth Connections | `Ctrl+Option+T`       | `Option+T`       |
| Raycast (Emoji & Symbols)            | Search Emoji & Symbols       | `Ctrl+Option+;`       | `Option+;`       |
| Raycast (Toggle Keyboard Brightness) | Toggle Keyboard Brightness   | `Ctrl+Option+B`       | `Option+B`       |
| Raycast (Shortcut Library)           | Shortcut Library             | `Ctrl+Option+.`       | `Option+.`       |
| Raycast (Set Audio Device)           | Set Output Device            | `Ctrl+Option+O`       | `Option+O`       |
| Raycast (Date Format Converter)      | Insert Natural Language Date | `Ctrl+Option+D`       | `Option+D`       |
| Raycast (Kill Process)               | Kill Process                 | `Ctrl+Option+K`       | `Option+K`       |
| Raycast (WeChat)                     | Search Contacts and Chat     | `Ctrl+Option+W`       | `Option+W`       |
| Raycast (Surge)                      | Toggle Proxy                 | `Ctrl+Option+X`       | `Option+X`       |
| Raycast (Hammerspoon)                | Reload Configuration File    | `Ctrl+Option+R`       | `Option+R`       |
| Raycast (Warp)                       | Open Warp Terminal           | `Ctrl+Option+L`       | `Option+L`       |
| Raycast (JetBrains)                  | Search Recent Projects       | `Ctrl+Option+J`       | `Option+J`       |
| Raycast (GitLab)                     | Search Projects              | `Ctrl+Option+G`       | `Option+G`       |
| Raycast (Figma)                      | Search Files                 | `Ctrl+Option+F`       | `Option+F`       |
| Raycast (Microsoft Edge)             | Search Workspaces            | `Ctrl+Option+E`       | `Option+E`       |
| Raycast (Color Picker)               | Pick Color                   | `Option+C`            | `Ctrl+Option+C`  |
| Clash                                | Open Clash                   | `Ctrl+Option+X`       | `Option+X`       |
| SnippetsLab                          | Toggle Assistant             | `Ctrl+Option+S`       | `Option+S`       |
| Notion                               | Notion AI Shortcut           | `Ctrl+Option+Shift+N` | `Option+Shift+N` |
| Notion                               | Open Notion                  | `Ctrl+Option+N`       | `Option+N`       |
| Warp                                 | Warp Global Hotkey           | `Ctrl+Option+~`       | `Option+~`       |
| Warp (Raycast)                       | Open Warp Terminal           | `Ctrl+Option+L`       | `Option+L`       |
| Ice                                  | Enable the Ice Bar           | `Ctrl+Option+I`       | `Option+I`       |
| TickTick                             | Quick Add                    | `Ctrl+Option+A`       | `Option+A` (reverted to `Ctrl+Option+A`) |
| TickTick                             | Start/Abandon Promo          | `Ctrl+Option+P`       | `Option+P` (reverted to `Ctrl+Option+P`) |
| VSCode (Raycast)                     | Paste in VSCode              | `Option+V`            | `Option+C`       |
| Raycast (Bitwarden)                  | Search Vault                 | `Cmd+Ctrl+B`          | `Option+B`       |
| Raycast (Toggle Keyboard Brightness) | Toggle Keyboard Brightness   | `Option+B`            | `Ctrl+Option+B`  |
| ChatGPT                              | Chat bar                     | `Ctrl+Option+Space`   | _(unchanged)_    |

### 2. `Cmd+Ctrl` (z/x/c/b/n/m/i/o/p) → `Ctrl+Option`

Moved specific letter keys from `Cmd+Ctrl` to `Ctrl+Option`:

| App                         | Action                | Before          | After           |
| --------------------------- | --------------------- | --------------- | --------------- |
| Raycast (Zentao)            | Search My Bugs        | `Cmd+Ctrl+Z`    | `Ctrl+Option+Z` |
| Raycast (Open With)         | Open Raycast          | `Cmd+Ctrl+O`    | `Ctrl+Option+O` |
| Raycast (Search Menu Items) | Search Menu Item      | `Cmd+Ctrl+M`    | `Ctrl+Option+M` |
| Raycast (Surge)             | Switch Proxy          | `Cmd+Ctrl+X`    | `Ctrl+Option+X` |
| Ice                         | Search menu bar items | `Cmd+Ctrl+I`    | `Ctrl+Option+I` |
| Notion (Raycast)            | Add Text to Page      | `Cmd+Ctrl+N`    | `Ctrl+Option+N` |
| PasteNow                    | Paste Clipboard       | `Ctrl+Option+P` | `Option+V`      |
| Shortcuts                   | Clear Notifications   | _(removed)_     | —               |

### 3. Removed Yabai

Removed the Yabai Raycast extension shortcut (`Cmd+Ctrl+Y` → Restart) and its icon import.

### 4. Multi View Reorder

Moved "Option View" to the first position in multi view layout.

### Summary of Active Modifier Layers

| Layer       | Keys                                                  |
| ----------- | ----------------------------------------------------- |
| Option      | `A B C D E F G I J K L M N O P Q R S T V W X Z ; . ~` |
| Ctrl+Option | `B C I M N O X Z` (migrated from Cmd+Ctrl)            |
| Cmd+Ctrl    | `1 2 3 4 H J K L [ ] Space Enter Backspace . , / ; '` |
| Cmd+Shift   | `7 8`                                                 |

---

### 5. Additional Shortcut Refinements (second commit)

#### 5.1 New Raycast Extensions

| App                      | Action           | Shortcut          |
| ------------------------ | ---------------- | ----------------- |
| Raycast (2FA Code Finder) | View 2FA Codes  | `Ctrl+Option+T`   |
| Raycast (Search Snippet)  | Search Snippet  | `Ctrl+Option+S`   |
| Raycast (HammerWM)        | Switch Window   | `Cmd+Ctrl+W`      |
| Raycast (Edge)            | New Window       | `Ctrl+Option+E`   |
| Raycast (Spark)           | Search Inbox     | `Option+M`        |

#### 5.2 Shortcut Reassignments

| App                          | Action                    | Before          | After            |
| ---------------------------- | ------------------------- | --------------- | ---------------- |
| Raycast (Restart Without Reopen) | Restart Without Reopen | `Option+Q`      | `Ctrl+Option+Q`  |
| Raycast (Hammerspoon)        | Reload Configuration File | `Option+R`      | `Ctrl+Option+H`  |
| Raycast (Search Menu Item)   | Search Menu Item          | `Option+M`      | `Cmd+Ctrl+M`     |
| Ice                          | Enable the Ice Bar        | `Option+I`      | `Ctrl+Option+I`  |
| Ice                          | Search menu bar items     | `Ctrl+Option+I` | `Option+I`       |

#### 5.3 Changed Action Name

| App            | Before             | After            | Shortcut   |
| -------------- | ------------------ | ---------------- | ---------- |
| Raycast (Warp) | Open Warp Terminal | Open Tab Config  | `Option+L` |

#### 5.4 New System Settings Shortcut

| App             | Action                 | Shortcut    |
| --------------- | ---------------------- | ----------- |
| System Settings | App System Settings    | `Option+,`  |

#### 5.5 Built-in Shortcut Changes

**Removed:**

| Shortcut               | Action              |
| ---------------------- | ------------------- |
| `Cmd+Ctrl+Shift+T`     | Add to Dock         |
| `Option+Cmd+P`         | Toggle Path Bar     |
| `Option+Cmd+S`         | Toggle Sidebar      |
| `Cmd+/`                | Toggle Status Bar   |
| `Cmd+J`                | View Options        |

**Added:**

| Shortcut       | Action                  |
| -------------- | ----------------------- |
| `Cmd+Shift+6`  | Capture Touch Bar       |

#### 5.6 Removed Duplicate

Removed the Warp Raycast extension duplicate entry (`Option+L` → "Open Warp Terminal") from `warp.ts`. The Raycast Warp entry in `raycast.ts` now shows "Open Tab Config" instead.

#### 5.7 UI / Visual Changes

- **Built-in icon**: Changed from `SystemSettings.png` to `Finder.Pale.svg` (new `Finder.Colorful.png` also added)
- **Built-in shortcut display**: Now shows key label text + `BuiltInMark` (Finder icon badge) instead of app icon
- **Modifier key labels**: Changed to Unicode symbols on keyboard — `control` → `⌃`, `opt` → `⌥`, `cmd` → `⌘`
- **Added `modifierUnicodeMap`** in `types/modifier.ts` for modifier key display
- **Added `BuiltInMark` component** for distinguishing built-in shortcuts visually

### Summary of Active Modifier Layers (Updated)

| Layer       | Keys                                                           |
| ----------- | -------------------------------------------------------------- |
| Option      | `A B C D E F G I J K L M N O P R S T V W X Z , ; . ~`         |
| Ctrl+Option | `A B C E H I K N O P Q S T X Z`                               |
| Cmd+Ctrl    | `1 2 3 4 H J K L M W [ ] Space Enter Backspace . , / ; '`     |
| Cmd+Shift   | `7 8`                                                          |

---

### 6. TickTick Reversion

Reverted TickTick shortcuts back to `Ctrl+Option` modifier:

| App     | Action              | Before    | After               |
| ------- | ------------------- | --------- | ------------------- |
| TickTick | Quick Add          | `Option+A` | `Ctrl+Option+A`    |
| TickTick | Start/Abandon Promo | `Option+P` | `Ctrl+Option+P`    |

---

### 6. KeyCastr Addition

| App       | Action            | Shortcut        |
| --------- | ----------------- | --------------- |
| KeyCastr  | Toggle KeyCastr   | `Ctrl+Option+K` |

**Visual Changes:**
- KeyCastr uses the colorful Finder icon (`Finder.Colorful.png`)

---

### 7. Raycast Notes Addition

| App          | Action     | Shortcut    |
| ------------ | ---------- | ----------- |
| Raycast (Notes) | Quick Note | `Option+R` |

**Visual Changes:**
- Raycast Notes uses the colorful Finder icon (`Finder.Colorful.png`)
