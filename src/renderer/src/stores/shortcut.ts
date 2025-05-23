import { createSignal } from 'solid-js';

import { Key } from '@renderer/types/key';
import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

import { shortcutListData } from '@renderer/data/shortcut';

import { useKeyRowStore } from './key';

const keyRowStore = useKeyRowStore();

const [shortcutList, setShortcutList] = createSignal(shortcutListData);

const getRelativeShortcutByKey = (key: Key): Shortcut | undefined =>
  shortcutList().find((shortcut) => {
    if (shortcut.keyCode !== key.keyCode) return;

    const modifiers = [!!shortcut.control, !!shortcut.command, !!shortcut.option, !!shortcut.shift];

    const activatingModifiers = [
      keyRowStore.activatedModifierList().has(KeyCode.CONTROL),
      keyRowStore.activatedModifierList().has(KeyCode.COMMAND),
      keyRowStore.activatedModifierList().has(KeyCode.OPTION),
      keyRowStore.activatedModifierList().has(KeyCode.SHIFT),
    ];

    return modifiers.every((modifier, index) => modifier === activatingModifiers[index]);
  });

export const useShortcutStore = () => ({
  shortcutList,
  setShortcutList,
  getRelativeShortcutByKey,
});
