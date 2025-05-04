import { For } from 'solid-js';

import { Key } from '@renderer/types/key';

import KeyItem from './KeyItem';

interface KeyRowProps {
  row: Key[];
}

const KeyRow = (props: KeyRowProps) => (
  <div class="mb-4 flex justify-between">
    <For each={props.row}>{(key) => <KeyItem key={key} />}</For>
  </div>
);

export default KeyRow;
