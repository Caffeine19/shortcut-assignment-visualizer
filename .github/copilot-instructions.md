# GitHub Copilot Instructions

## Project Overview
This is a **Shortcut Assignment Visualizer** - an Electron desktop app that displays keyboard shortcuts as an interactive visual keyboard layout. Users can press modifier keys (Command/Option/Control/Shift) to see which applications have shortcuts bound to specific keys.

## Architecture & Tech Stack
- **Electron + Vite**: Main process (`src/main/`), renderer process (`src/renderer/`), preload scripts (`src/preload/`)
- **SolidJS**: Reactive UI framework (not React) - uses `createSignal()`, `createMemo()`, `createEffect()`
- **TypeScript**: Strict typing with path aliases (`@renderer/*` → `src/renderer/src/*`)
- **TailwindCSS v4**: Utility-first styling with `tailwind-merge` for conditional classes
- **PNPM**: Package manager (not npm/yarn)

## Core Data Model
### Keyboard Layout (`src/renderer/src/data/key.ts`)
- `keyRowListData`: 2D array representing physical keyboard layout
- Each key has `keyCode`, `span` (width multiplier), and `label`
- Spans control visual width: 1 = standard key, 1.5 = Tab, 2.25 = Shift, etc.

### Shortcuts (`src/renderer/src/data/shortcut/`)
- Modular files per application (raycast.ts, vscode.ts, notion.ts, etc.)
- Each shortcut maps `keyCode` + modifier combination to specific actions
- Special support for **Raycast extensions** with separate icons and metadata
- Icons use dynamic color extraction via `node-vibrant` for visual theming

### State Management (SolidJS Stores)
- `useKeyRowStore()`: Tracks activated modifier keys, keyboard layout
- `useShortcutStore()`: Maps shortcuts to keys based on current modifier state
- **No Redux/Zustand** - uses SolidJS reactive primitives

## Key Interaction Patterns
### Modifier Key Listening (`src/renderer/src/hooks/useListeningForModifierKeyDown.ts`)
- **Cmd+K**: Start listening mode (red indicator)
- **Escape**: Stop listening
- Hold modifiers to highlight matching shortcuts on keyboard
- Uses throttled event handling (1000ms interval) for performance

### Visual Feedback (`src/renderer/src/components/KeyItem.tsx`)
- Dynamic border colors from app icon color palettes
- Hover tooltips showing full shortcut details
- Press animations (translate + shadow effects)
- Raycast extensions get special visual badges

## Development Workflow
```bash
# Development with hot reload
pnpm dev

# Type checking (separate configs for main/renderer)
pnpm typecheck          # Both processes
pnpm typecheck:web      # Renderer only
pnpm typecheck:node     # Main process only

# Building
pnpm build:mac          # macOS native
pnpm build:win          # Windows
pnpm build:linux        # Linux
```

## Platform-Specific Features
### macOS Integration
- **Vibrancy effects**: `under-window` vibrancy with transparent background
- **Custom title bar**: Hidden with overlay controls
- **App region dragging**: Title area is draggable, keyboard area is not

### Icon Assets (`src/renderer/src/assets/`)
- App icons in `/assets/` root
- Raycast extension icons in `/assets/raycast/` subdirectory
- Uses Vite's `?asset` suffix for proper bundling

## Code Conventions
### File Organization
- **Components**: Single-purpose, use PascalCase filenames
- **Data**: Separate files per application in `data/shortcut/`
- **Types**: Co-located with related functionality
- **Stores**: Simple reactive state, avoid complex derived state

### SolidJS Patterns
```typescript
// Reactive state
const [signal, setSignal] = createSignal(initialValue)

// Computed values
const computed = createMemo(() => transform(signal()))

// Side effects
createEffect(() => { /* runs when dependencies change */ })
```

### Styling Approach
- **TailwindCSS utilities** for most styling
- **Inline styles** for dynamic values (colors, dimensions)
- **`twMerge()`** for conditional class combinations
- **CSS custom properties** for dynamic color theming

## Adding New Shortcuts
1. Create new file in `src/renderer/src/data/shortcut/{app}.ts`
2. Export array following `Shortcut` type interface
3. Add icon asset to `src/renderer/src/assets/`
4. Import and spread into `shortcutListData` in `src/renderer/src/data/shortcut.ts`
5. For Raycast extensions, include `raycastExtension` and `raycastExtensionIcon` properties

## Performance Notes
- **Image optimization**: Icons are bundled as assets, use appropriate sizes
- **Color extraction**: `node-vibrant` runs async, cache results when possible
- **Event throttling**: Keyboard events are throttled to prevent excessive re-renders
- **Conditional rendering**: Use `<Show when={}>` instead of `&&` for better performance
