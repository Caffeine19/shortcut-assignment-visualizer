import { KeyCode } from './keyCode';

/** Modifier key string literals for shortcut definition */
export type ModifierKey = 'control' | 'command' | 'option' | 'shift';

/**
 * All valid ordered modifier key combinations.
 *
 * Enforced order: `command` → `control` → `option` → `shift`
 *
 * @example
 *   `['command', 'option']` ✓
 *   `['command', 'control', 'option', 'shift']` ✓
 *   `['control', 'command']` ✗ (wrong order)
 */
type OrderedModifiers =
  | []
  | ['command']
  | ['control']
  | ['option']
  | ['shift']
  | ['command', 'control']
  | ['command', 'option']
  | ['command', 'shift']
  | ['control', 'option']
  | ['control', 'shift']
  | ['option', 'shift']
  | ['command', 'control', 'option']
  | ['command', 'control', 'shift']
  | ['command', 'option', 'shift']
  | ['control', 'option', 'shift']
  | ['command', 'control', 'option', 'shift'];

/** Base properties shared by all shortcut definitions */
type ShortcutBase = {
  actionName: string;
  tool: string;
  toolIcon: string;
} & Partial<{
  raycastExtension?: string;
  raycastExtensionIcon?: string;
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

/** Normalized shortcut with consistent keyCode and modifier booleans */
export type NormalizedShortcut = ShortcutBase & {
  keyCode: KeyCode;
  control: boolean;
  command: boolean;
  option: boolean;
  shift: boolean;
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
    command: modifiers.includes('command'),
    control: modifiers.includes('control'),
    option: modifiers.includes('option'),
    shift: modifiers.includes('shift'),
  };
}
