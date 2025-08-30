import { For } from 'solid-js';
import { twJoin } from 'tailwind-merge';

import { Key } from '@renderer/types/key';
import { ModifierKeyCode } from '@renderer/types/modifier';

import KeyItem, { KeyProps } from './KeyItem';

interface KeyRowProps {
  row: Key[];
  forcedModifiers?: Set<ModifierKeyCode>;
  isInteractive?: boolean;
  keySize?: KeyProps['size'];
  last: boolean;
}

const KeyRow = (props: KeyRowProps) => (
  <div
    class={twJoin(
      'flex justify-between',
      props.last ? '' : props.keySize === 'sm' ? 'mb-2' : 'mb-4',
    )}
  >
    <For each={props.row}>
      {(key) => (
        <KeyItem
          key={key}
          forcedModifiers={props.forcedModifiers}
          isInteractive={props.isInteractive ?? true}
          size={props.keySize}
        />
      )}
    </For>
  </div>
);

export default KeyRow;
