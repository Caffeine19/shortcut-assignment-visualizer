import { createEffect, onCleanup } from 'solid-js';
import { match } from 'ts-pattern';

import { KeyCode } from '@renderer/types/keyCode';
import { KeyboardEventKeyCode, ModifierKeyCode } from '@renderer/types/modifier';

import { useKeyRowStore } from '@renderer/stores/key';

export const useKeyDown = () => {
  const keyRowStore = useKeyRowStore();

  const onKeydown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase() as KeyboardEventKeyCode;

    if (key === KeyboardEventKeyCode.ESCAPE) {
      keyRowStore.activatedModifierList().clear();
      keyRowStore.setActivatedModifierList(new Set(keyRowStore.activatedModifierList()));
      return;
    }

    const modifierKeyCode = match<KeyboardEventKeyCode, ModifierKeyCode | undefined>(key)
      .with(KeyboardEventKeyCode.META, () => KeyCode.COMMAND)
      .with(KeyboardEventKeyCode.ALT, () => KeyCode.OPTION)
      .with(KeyboardEventKeyCode.CONTROL, () => KeyCode.CONTROL)
      .with(KeyboardEventKeyCode.SHIFT, () => KeyCode.SHIFT)
      .otherwise(() => undefined);

    if (!modifierKeyCode) return;

    if (keyRowStore.activatedModifierList().has(modifierKeyCode)) {
      keyRowStore.activatedModifierList().delete(modifierKeyCode);
    } else {
      keyRowStore.activatedModifierList().add(modifierKeyCode);
    }

    keyRowStore.setActivatedModifierList(new Set(keyRowStore.activatedModifierList()));
  };

  createEffect(() => {
    window.addEventListener('keydown', onKeydown);
  });
  onCleanup(() => {
    window.removeEventListener('keydown', onKeydown);
  });
};
