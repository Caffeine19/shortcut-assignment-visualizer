import { type Component, For } from 'solid-js';

import KeyRow from '@renderer/components/KeyRow';

import { ModifierKeyCode } from '@renderer/types/modifier';

import { useKeyRowStore } from '@renderer/stores/key';

interface KeyboardViewProps {
  title: string;
  modifiers: ModifierKeyCode[];
  size?: 'sm' | 'md' | 'lg';
}

const KeyboardView: Component<KeyboardViewProps> = (props) => {
  const keyRowStore = useKeyRowStore();

  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <h3 class="font-mono text-sm text-neutral-300">{props.title}</h3>
      <div class="rounded-lg bg-black p-4">
        <div class="flex flex-col items-stretch justify-center">
          <For each={keyRowStore.keyRowList()}>
            {(row) => (
              <KeyRow
                last={row === keyRowStore.keyRowList()[keyRowStore.keyRowList().length - 1]}
                row={row}
                forcedModifiers={new Set(props.modifiers)}
                isInteractive={false}
                keySize={props.size ?? 'sm'}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default KeyboardView;
