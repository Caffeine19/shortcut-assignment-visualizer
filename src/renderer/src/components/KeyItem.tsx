import { JSX, JSXElement, Show, createSignal } from 'solid-js';

import type { Key } from '@renderer/types/key';
import type { Shortcut } from '@renderer/types/shortcut';

interface KeyProps {
  keyData: Key;
  onKeyClick: (key: Key) => void;
  getKeyClass: (key: Key) => string;
  getKeyStyles: (key: Key) => JSX.CSSProperties;
  isShortcutActive: (key: string) => boolean;
  getRelativeShortCut: (key: Key) => Shortcut | undefined;
}

const KeyItem = (props: KeyProps): JSXElement => {
  const [hovered, setHovered] = createSignal(false);

  return (
    <div
      onClick={() => props.onKeyClick(props.keyData)}
      class={props.getKeyClass(props.keyData)}
      style={props.getKeyStyles(props.keyData)}
      onMouseDown={(e) => e.currentTarget.classList.add('translate-y-[1px]', 'shadow-inner')}
      onMouseUp={(e) => {
        e.currentTarget.classList.remove('translate-y-[1px]', 'shadow-inner');
        setHovered(false);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove('translate-y-[1px]', 'shadow-inner');
        setHovered(false);
      }}
    >
      {props.isShortcutActive(props.keyData.keyCode) ? (
        <>
          <img
            src={props.getRelativeShortCut(props.keyData)?.toolIcon || ''}
            alt={`Icon for ${props.keyData.keyCode}`}
            class="h-12 w-12 object-contain"
          />
          <Show when={hovered()}>
            <div class="absolute -top-12 z-10 flex items-center justify-center rounded-md bg-zinc-800 p-2 text-sm text-zinc-200">
              <span class="break-keep whitespace-nowrap">
                {props.getRelativeShortCut(props.keyData)?.tool} -{' '}
                {props.getRelativeShortCut(props.keyData)?.actionName}
              </span>
            </div>
          </Show>
        </>
      ) : (
        <span class="text-sm sm:text-base">{props.keyData.label || props.keyData.keyCode}</span>
      )}
    </div>
  );
};

export default KeyItem;
