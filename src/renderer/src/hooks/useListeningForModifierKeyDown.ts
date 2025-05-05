import { throttle } from 'radash';
import { createEffect, createSignal, on, onCleanup, onMount } from 'solid-js';

import { KeyCode } from '@renderer/types/keyCode';

import { useKeyRowStore } from '@renderer/stores/key';

export const useListeningForModifierKeyDown = () => {
  const keyRowStore = useKeyRowStore();

  const [isListening, setIsListening] = createSignal(false);

  const [keydownList, setKeydownList] = createSignal<KeyboardEvent[]>([]);
  const pushKeydownList = throttle(
    {
      interval: 1000,
    },
    (event: KeyboardEvent) => {
      setKeydownList((prev) => [...prev, event]);
    },
  );
  createEffect(() => {
    console.log(
      '🚀 ~ useListeningForModifierKeyDown.ts:26 ~ useListeningForModifierKeyDown ~ keydownList:',
      keydownList(),
    );
  });

  const onKeydown = (event: KeyboardEvent) => {
    // console.log('🚀 ~ useListeningForModifierKeyDown.ts:13 ~ onKeydown ~ event:', event);

    pushKeydownList(event);

    if (event.metaKey && event.key === 'k') {
      setIsListening(!isListening());
      return;
    }

    if (!isListening()) return;

    if (!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)) return;

    keyRowStore.activatedModifierList().clear();
    keyRowStore.setActivatedModifierList(new Set(keyRowStore.activatedModifierList()));

    if (event.metaKey) {
      keyRowStore.activatedModifierList().add(KeyCode.COMMAND);
    }
    if (event.altKey) {
      keyRowStore.activatedModifierList().add(KeyCode.OPTION);
    }
    if (event.ctrlKey) {
      keyRowStore.activatedModifierList().add(KeyCode.CONTROL);
    }
    if (event.shiftKey) {
      keyRowStore.activatedModifierList().add(KeyCode.SHIFT);
    }

    keyRowStore.setActivatedModifierList(new Set(keyRowStore.activatedModifierList()));
  };

  onMount(() => {
    window.addEventListener('keydown', onKeydown);
  });
  onCleanup(() => {
    window.removeEventListener('keydown', onKeydown);
  });

  return {
    isListening,
    setIsListening,
  };
};
