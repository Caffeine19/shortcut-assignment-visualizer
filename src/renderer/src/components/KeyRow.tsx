import { For, JSX } from 'solid-js';

import { Key } from '@renderer/types/key';
import { Shortcut } from '@renderer/types/shortcut';

import KeyItem from './KeyItem';

interface KeyRowProps {
  row: Key[];
  onKeyClick: (key: Key) => void;
  getKeyClass: (key: Key) => string;
  getKeyStyles: (key: Key) => JSX.CSSProperties;
  isShortcutActive: (key: string) => boolean;
  getRelativeShortCut: (key: Key) => Shortcut | undefined;
}

const KeyRow = (props: KeyRowProps) => (
  <div class="mb-4 flex justify-between">
    <For each={props.row}>
      {(key) => (
        <KeyItem
          keyData={key}
          onKeyClick={props.onKeyClick}
          getKeyClass={props.getKeyClass}
          getKeyStyles={props.getKeyStyles}
          isShortcutActive={props.isShortcutActive}
          getRelativeShortCut={props.getRelativeShortCut}
        />
      )}
    </For>
  </div>
);

export default KeyRow;
