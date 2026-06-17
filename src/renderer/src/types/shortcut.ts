import { KeyCode } from './keyCode';

/** Modifier key string literals for shortcut definition */
export type ModifierKey = 'control' | 'command' | 'option' | 'shift';

/**
 * All valid ordered modifier key combinations.
 *
 * Enforced order (Apple HIG): `control` → `option` → `shift` → `command`
 *
 * @example
 *   `['control', 'option']` ✓
 *   `['control', 'option', 'shift', 'command']` ✓
 *   `['command', 'control']` ✗ (wrong order)
 */
type OrderedModifiers =
  | []
  | ['control']
  | ['option']
  | ['shift']
  | ['command']
  | ['control', 'option']
  | ['control', 'shift']
  | ['control', 'command']
  | ['option', 'shift']
  | ['option', 'command']
  | ['shift', 'command']
  | ['control', 'option', 'shift']
  | ['control', 'option', 'command']
  | ['control', 'shift', 'command']
  | ['option', 'shift', 'command']
  | ['control', 'option', 'shift', 'command'];

/** Hardcoded icon color pair for apps where Vibrant extraction doesn't work well */
export interface IconColors {
  /** Primary color (used for border and main gradient stop) */
  primary: string;
  /** Secondary color (used for secondary gradient stop) */
  secondary: string;
}

/** Base properties shared by all shortcut definitions */
type ShortcutBase = {
  actionName: string;
  tool: string;
  toolIcon: string;
} & Partial<{
  raycastExtension?: string;
  raycastExtensionIcon?: string;
  /** Override Vibrant-extracted colors with hardcoded values */
  iconColors?: IconColors;
  /** Whether this is a built-in system shortcut (lower priority) */
  builtIn?: boolean;
}>;

/**
 * Shortcut format using keys array
 *
 * @example
 *   ```typescript
 *   {
 *     keys: [KeyCode.H, 'control', 'option'],
 *     tool: 'Homerow',
 *     toolIcon: HomerowIcon,
 *     actionName: 'Homerow Scrolling',
 *   }
 *   ```;
 */
export type Shortcut = ShortcutBase & {
  keys: [KeyCode, ...OrderedModifiers];
};

/**
 * Normalized shortcut with consistent keyCode and modifier booleans (Apple HIG order: control →
 * option → shift → command)
 */
export type NormalizedShortcut = ShortcutBase & {
  keyCode: KeyCode;
  control: boolean;
  option: boolean;
  shift: boolean;
  command: boolean;
};

/**
 * Normalizes a shortcut to a consistent format with boolean modifiers
 *
 * @param shortcut - Shortcut definition
 * @returns Normalized shortcut with boolean modifiers
 */
export function normalizeShortcut(shortcut: Shortcut): NormalizedShortcut {
  const [keyCode, ...modifiers] = shortcut.keys as [KeyCode, ...ModifierKey[]];
  return {
    ...shortcut,

    keyCode,
    control: modifiers.includes('control'),
    option: modifiers.includes('option'),
    shift: modifiers.includes('shift'),
    command: modifiers.includes('command'),
  };
}
