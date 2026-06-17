import { createMemo, createSignal } from 'solid-js';

import { Key } from '@renderer/types/key';
import { KeyCode } from '@renderer/types/keyCode';
import { ModifierKeyCode } from '@renderer/types/modifier';
import { NormalizedShortcut, normalizeShortcut } from '@renderer/types/shortcut';

import { shortcutListData } from '@renderer/data/shortcut';

import { useKeyRowStore } from './key';

const keyRowStore = useKeyRowStore();

const [shortcutList, setShortcutList] = createSignal(shortcutListData);

/** Memoized normalized shortcut list for consistent internal usage */
const normalizedShortcutList = createMemo(() => shortcutList().map(normalizeShortcut));

/** Check if a shortcut matches the given key and modifier state */
const matchesShortcut = (
  shortcut: NormalizedShortcut,
  key: Key,
  activeModifiers: Set<ModifierKeyCode>,
): boolean => {
  if (shortcut.keyCode !== key.keyCode) return false;

  // Apple HIG order: Control → Option → Shift → Command
  const modifiers = [shortcut.control, shortcut.option, shortcut.shift, shortcut.command];
  const activatingModifiers = [
    activeModifiers.has(KeyCode.CONTROL),
    activeModifiers.has(KeyCode.OPTION),
    activeModifiers.has(KeyCode.SHIFT),
    activeModifiers.has(KeyCode.COMMAND),
  ];

  return modifiers.every((modifier, index) => modifier === activatingModifiers[index]);
};

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
      matchesShortcut(shortcut, { keyCode: shortcut.keyCode, span: 1, label: '' }, forcedModifiers),
  ).length;

export const useShortcutStore = () => ({
  shortcutList,
  setShortcutList,
  getRelativeShortcutByKey,
  getShortcutByKeyWithModifiers,
  getShortcutCountByModifiers,
});
