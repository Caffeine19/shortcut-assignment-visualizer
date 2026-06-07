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

  const modifiers = [shortcut.control, shortcut.command, shortcut.option, shortcut.shift];
  const activatingModifiers = [
    activeModifiers.has(KeyCode.CONTROL),
    activeModifiers.has(KeyCode.COMMAND),
    activeModifiers.has(KeyCode.OPTION),
    activeModifiers.has(KeyCode.SHIFT),
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

export const useShortcutStore = () => ({
  shortcutList,
  setShortcutList,
  getRelativeShortcutByKey,
  getShortcutByKeyWithModifiers,
});
