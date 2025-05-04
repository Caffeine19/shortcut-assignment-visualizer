import { createSignal } from 'solid-js';

import { ModifierKeyCode } from '@renderer/types/modifier';

import { keyRowListData } from '@renderer/data/key';

const [keyRowList, setKeyRowList] = createSignal(keyRowListData);

const [activatedModifierList, setActivatedModifierList] = createSignal(new Set<ModifierKeyCode>());

const toggleActivatedModifier = (key: ModifierKeyCode) => {
  if (activatedModifierList().has(key)) {
    activatedModifierList().delete(key);
  } else {
    activatedModifierList().add(key);
  }
  setActivatedModifierList(new Set(activatedModifierList()));
};

export const useKeyRowStore = () => ({
  keyRowList,
  setKeyRowList,
  activatedModifierList,
  setActivatedModifierList,
  toggleActivatedModifier,
});
