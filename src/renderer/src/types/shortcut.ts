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

/**
 * Modifier token for double-press bindings.
 *
 * Plain tokens (`command`) do not distinguish hands; `left_` / `right_` prefixed tokens do.
 *
 * @example
 *   `'command'` — either hand's Command
 *   `'left_shift'` — only the left Shift
 */
export type DoubleModifierKey = ModifierKey | `left_${ModifierKey}` | `right_${ModifierKey}`;

/** Accepted aliases for plain double-press modifier tokens */
type DoubleModifierAlias = 'cmd' | 'ctrl' | 'opt' | 'alt';

/** Double-press modifier token as written in data files (aliases allowed) */
export type DoubleModifierKeyInput = DoubleModifierKey | DoubleModifierAlias;

/**
 * A regular key combo: one key plus zero or more ordered modifiers.
 *
 * @example
 *   `[KeyCode.H, 'control', 'command']`;
 */
export type KeyCombo = [KeyCode, ...OrderedModifiers];

/**
 * A double-press binding: the same modifier written twice.
 *
 * @example
 *   `['cmd', 'cmd']` — double Command, either hand
 *   `['left_shift', 'left_shift']` — double left Shift only
 */
export type DoubleKeyCombo = [DoubleModifierKeyInput, DoubleModifierKeyInput];

/** One binding of a shortcut: a regular combo or a double-press */
export type KeyBinding = KeyCombo | DoubleKeyCombo;

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
 * Shortcut definition — one shortcut may bind multiple key combos
 *
 * @example
 *   ```typescript
 *   {
 *     keys: [[KeyCode.H, 'control', 'option']],
 *     tool: 'Homerow',
 *     toolIcon: HomerowIcon,
 *     actionName: 'Homerow Scrolling',
 *   }
 *   ```;
 *
 * @example
 *   ```typescript
 *   {
 *     // Loop: also triggers on double-pressing Command
 *     keys: [[KeyCode.SPACE, 'control', 'command'], ['cmd', 'cmd']],
 *   }
 *   ```;
 */
export type Shortcut = ShortcutBase & {
  keys: KeyBinding[];
};

/** Normalized regular combo binding (Apple HIG order: control → option → shift → command) */
export interface NormalizedComboBinding {
  kind: 'combo';
  keyCode: KeyCode;
  control: boolean;
  option: boolean;
  shift: boolean;
  command: boolean;
}

/** Normalized double-press binding */
export interface NormalizedDoubleBinding {
  kind: 'double';
  /** Canonical plain modifier (aliases resolved, side stripped) */
  key: ModifierKey;
  /** Which hand, when the binding distinguishes sides */
  side?: 'left' | 'right';
}

/** Normalized binding union */
export type NormalizedBinding = NormalizedComboBinding | NormalizedDoubleBinding;

/** Normalized shortcut carrying all of its normalized bindings */
export type NormalizedShortcut = ShortcutBase & {
  bindings: NormalizedBinding[];
};

/** Alias → canonical plain modifier map for double-press tokens */
const doubleAliasMap: Record<ModifierKey | DoubleModifierAlias, ModifierKey> = {
  command: 'command',
  cmd: 'command',
  control: 'control',
  ctrl: 'control',
  option: 'option',
  opt: 'option',
  alt: 'option',
  shift: 'shift',
};

/**
 * Parses a double-press modifier token into a normalized double binding
 *
 * @example
 *   parseDoubleToken('left_shift'); // { kind: 'double', key: 'shift', side: 'left' }
 *   parseDoubleToken('space'); // null
 *
 * @param token - Token like `cmd`, `shift`, `left_shift`, `right_command`
 * @returns The normalized binding, or `null` when the token is not a modifier
 */
export function parseDoubleToken(token: string): NormalizedDoubleBinding | null {
  const side = token.startsWith('left_')
    ? 'left'
    : token.startsWith('right_')
      ? 'right'
      : undefined;
  const base = side ? token.slice(side.length + 1) : token;
  const key = doubleAliasMap[base as DoubleModifierKeyInput];
  if (!key) return null;
  return { kind: 'double', key, side };
}

/**
 * Type guard: does this binding represent a double-press?
 *
 * A binding is a double-press when both entries are the same modifier token.
 *
 * @param binding - Binding from a shortcut definition
 */
function isDoubleKeyCombo(binding: KeyBinding): binding is DoubleKeyCombo {
  if (binding.length !== 2) return false;
  const [first, second] = binding as [string, string];
  const a = parseDoubleToken(first);
  const b = parseDoubleToken(second);
  return !!a && !!b && a.key === b.key && a.side === b.side;
}

/**
 * Normalizes a shortcut into consistent bindings
 *
 * @param shortcut - Shortcut definition
 * @returns Normalized shortcut with a list of normalized bindings
 */
export function normalizeShortcut(shortcut: Shortcut): NormalizedShortcut {
  return {
    ...shortcut,
    bindings: shortcut.keys.map((binding): NormalizedBinding => {
      if (isDoubleKeyCombo(binding)) {
        return parseDoubleToken(binding[0]) ?? parseDoubleToken(binding[1])!;
      }

      const [keyCode, ...modifiers] = binding as [KeyCode, ...ModifierKey[]];
      return {
        kind: 'combo',
        keyCode,
        control: modifiers.includes('control'),
        option: modifiers.includes('option'),
        shift: modifiers.includes('shift'),
        command: modifiers.includes('command'),
      };
    }),
  };
}
