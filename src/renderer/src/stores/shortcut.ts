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

const getRelativeShortcutByKey = (key: Key): NormalizedShortcut | undefined =>
  normalizedShortcutList().find((shortcut) => {
    if (shortcut.keyCode !== key.keyCode) return;

    const modifiers = [shortcut.control, shortcut.command, shortcut.option, shortcut.shift];

    const activatingModifiers = [
      keyRowStore.activatedModifierList().has(KeyCode.CONTROL),
      keyRowStore.activatedModifierList().has(KeyCode.COMMAND),
      keyRowStore.activatedModifierList().has(KeyCode.OPTION),
      keyRowStore.activatedModifierList().has(KeyCode.SHIFT),
    ];

    return modifiers.every((modifier, index) => modifier === activatingModifiers[index]);
  });

const getShortcutByKeyWithModifiers = (
  key: Key,
  forcedModifiers: Set<ModifierKeyCode>,
): NormalizedShortcut | undefined =>
  normalizedShortcutList().find((shortcut) => {
    if (shortcut.keyCode !== key.keyCode) return;

    const modifiers = [shortcut.control, shortcut.command, shortcut.option, shortcut.shift];

    const activatingModifiers = [
      forcedModifiers.has(KeyCode.CONTROL),
      forcedModifiers.has(KeyCode.COMMAND),
      forcedModifiers.has(KeyCode.OPTION),
      forcedModifiers.has(KeyCode.SHIFT),
    ];

    return modifiers.every((modifier, index) => modifier === activatingModifiers[index]);
  });

export const useShortcutStore = () => ({
  shortcutList,
  setShortcutList,
  getRelativeShortcutByKey,
  getShortcutByKeyWithModifiers,
});
