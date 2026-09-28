import { createMemo, createSignal } from 'solid-js';

import { Key } from '@renderer/types/key';
import { KeyCode } from '@renderer/types/keyCode';
import { ModifierKeyCode } from '@renderer/types/modifier';
import {
  ModifierKey,
  NormalizedComboBinding,
  NormalizedShortcut,
  normalizeShortcut,
} from '@renderer/types/shortcut';

import { shortcutListData } from '@renderer/data/shortcut';

import { useKeyRowStore } from './key';

const keyRowStore = useKeyRowStore();

const [shortcutList, setShortcutList] = createSignal(shortcutListData);

/** Memoized normalized shortcut list for consistent internal usage */
const normalizedShortcutList = createMemo(() => shortcutList().map(normalizeShortcut));

/** Plain modifier token → physical modifier keyCode, for matching double-press bindings */
const modifierKeyCodeByToken: Record<ModifierKey, ModifierKeyCode> = {
  control: KeyCode.CONTROL,
  option: KeyCode.OPTION,
  shift: KeyCode.SHIFT,
  command: KeyCode.COMMAND,
};

/**
 * Check whether a combo binding matches the given modifier state (Apple HIG order: Control → Option
 * → Shift → Command)
 */
const comboMatchesModifiers = (
  binding: NormalizedComboBinding,
  activeModifiers: Set<ModifierKeyCode>,
): boolean => {
  const modifiers = [binding.control, binding.option, binding.shift, binding.command];
  const activatingModifiers = [
    activeModifiers.has(KeyCode.CONTROL),
    activeModifiers.has(KeyCode.OPTION),
    activeModifiers.has(KeyCode.SHIFT),
    activeModifiers.has(KeyCode.COMMAND),
  ];

  return modifiers.every((modifier, index) => modifier === activatingModifiers[index]);
};

/** Check if a shortcut has a combo binding matching the given key and modifier state */
const matchesShortcut = (
  shortcut: NormalizedShortcut,
  key: Key,
  activeModifiers: Set<ModifierKeyCode>,
): boolean =>
  shortcut.bindings.some(
    (binding) =>
      binding.kind === 'combo' &&
      binding.keyCode === key.keyCode &&
      comboMatchesModifiers(binding, activeModifiers),
  );

const getRelativeShortcutByKey = (key: Key): NormalizedShortcut[] =>
  normalizedShortcutList().filter((shortcut) =>
    matchesShortcut(shortcut, key, keyRowStore.activatedModifierList()),
  );

const getShortcutByKeyWithModifiers = (
  key: Key,
  forcedModifiers: Set<ModifierKeyCode>,
): NormalizedShortcut[] =>
  normalizedShortcutList().filter((shortcut) => matchesShortcut(shortcut, key, forcedModifiers));

/**
 * Count non-built-in shortcuts matching a given modifier combination. Iterates all keys to find how
 * many unique shortcuts exist for these modifiers.
 */
const getShortcutCountByModifiers = (forcedModifiers: Set<ModifierKeyCode>): number =>
  normalizedShortcutList().filter(
    (shortcut) =>
      !shortcut.builtIn &&
      shortcut.bindings.some(
        (binding) => binding.kind === 'combo' && comboMatchesModifiers(binding, forcedModifiers),
      ),
  ).length;

/**
 * Shortcuts bound to a double-press of the modifier rendered as the given key.
 *
 * - Side-less double bindings (`['cmd','cmd']`) match either physical instance of that modifier.
 * - Side-specific bindings (`['left_shift','left_shift']`) only match the key annotated with that
 *   side.
 *
 * @param key - Physical key from the keyboard layout
 */
const getDoubleShortcutsForKey = (key: Key): NormalizedShortcut[] =>
  normalizedShortcutList().filter((shortcut) =>
    shortcut.bindings.some(
      (binding) =>
        binding.kind === 'double' &&
        modifierKeyCodeByToken[binding.key] === key.keyCode &&
        (binding.side === undefined || binding.side === key.side),
    ),
  );

/** Total number of shortcuts that have at least one double-press binding */
const getDoubleShortcutCount = (): number =>
  normalizedShortcutList().filter((shortcut) =>
    shortcut.bindings.some((binding) => binding.kind === 'double'),
  ).length;

export const useShortcutStore = () => ({
  shortcutList,
  setShortcutList,
  getRelativeShortcutByKey,
  getShortcutByKeyWithModifiers,
  getShortcutCountByModifiers,
  getDoubleShortcutsForKey,
  getDoubleShortcutCount,
});
