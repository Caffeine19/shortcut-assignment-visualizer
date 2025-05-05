import { Vibrant } from 'node-vibrant/browser';
import { JSX, Show, createEffect, createMemo, createSignal } from 'solid-js';
import { twJoin, twMerge } from 'tailwind-merge';
import tinycolor2 from 'tinycolor2';

import type { Key } from '@renderer/types/key';
import { ModifierKeyCode, isModifierKeyCode } from '@renderer/types/modifier';

import { useKeyRowStore } from '@renderer/stores/key';
import { useShortcutStore } from '@renderer/stores/shortcut';

import RaycastExtensionMark from './RaycastExtensionMark';

interface KeyProps {
  key: Key;
}

const KeyItem = (props: KeyProps) => {
  const keyRowStore = useKeyRowStore();
  const shortcutStore = useShortcutStore();

  const [hovered, setHovered] = createSignal(false);

  const onModifierClick = (modifierKeyCode: ModifierKeyCode) => {
    keyRowStore.toggleActivatedModifier(modifierKeyCode);
  };

  const onKeyClick = () => {
    if (isModifierKeyCode(props.key.keyCode)) {
      onModifierClick(props.key.keyCode);
    }
  };

  const shortcut = createMemo(() => shortcutStore.getRelativeShortcutByKey(props.key));

  const keyClass = createMemo(() =>
    twMerge(
      'relative mx-2 flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-center font-bold text-zinc-200 transition-all duration-150 hover:border-red-500/60 hover:bg-zinc-800 hover:text-red-400',

      isModifierKeyCode(props.key.keyCode)
        ? keyRowStore.activatedModifierList().has(props.key.keyCode)
          ? 'border-red-500 bg-red-500/20'
          : 'cursor-pointer'
        : '',
    ),
  );

  const keySpanStyle = createMemo(() => {
    const span = props.key.span || 1;
    return {
      width: `${span * 5}rem`,
      height: '5rem',
    };
  });

  const [iconColorStyle, setIconColorStyle] = createSignal<JSX.CSSProperties>({});
  const updateIconColorStyles = async () => {
    const src = shortcut()?.raycastExtensionIcon || shortcut()?.toolIcon;
    if (!src) {
      setIconColorStyle({});
      return;
    }

    const palette = await Vibrant.from(src).getPalette();
    const primary = palette.LightVibrant?.hex || '#3366FF';
    const secondary = palette.Vibrant?.hex || '#FFCC00';

    setIconColorStyle({
      'border-color': primary,
      background: `radial-gradient(circle, ${tinycolor2(primary).setAlpha(0.3).toRgbString()} 10%, ${tinycolor2(secondary).setAlpha(0.1).toRgbString()} 100%)`,
    });
  };
  createEffect(updateIconColorStyles);

  return (
    <div
      onClick={() => onKeyClick()}
      class={keyClass()}
      style={{
        ...keySpanStyle(),
        ...iconColorStyle(),
      }}
      onMouseDown={(e) => e.currentTarget.classList.add('translate-y-[1px]', 'shadow-inner')}
      onMouseUp={(e) => {
        e.currentTarget.classList.remove('translate-y-[1px]', 'shadow-inner');
        setHovered(false);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {shortcut() ? (
        <>
          <img
            src={shortcut()?.raycastExtensionIcon || shortcut()?.toolIcon}
            alt={`Icon for ${props.key.keyCode}`}
            class={twMerge(
              'h-12 w-12 object-contain',
              shortcut()?.raycastExtensionIcon && 'h-9.5 w-9.5',
            )}
          />
          <Show when={shortcut()?.raycastExtension}>
            <RaycastExtensionMark />
          </Show>
          <Show when={hovered()}>
            <div class="absolute -top-12 z-10 flex items-center justify-center rounded-md border border-zinc-600 bg-zinc-700/60 p-2 text-base text-zinc-200 backdrop-blur-sm">
              <span class="break-keep whitespace-nowrap">
                {[shortcut()?.tool, shortcut()?.raycastExtension, shortcut()?.actionName]
                  .filter((v) => v)
                  .join(' / ')}
              </span>
            </div>
          </Show>
        </>
      ) : (
        <span class="text-sm sm:text-base">{props.key.label || props.key.keyCode}</span>
      )}
    </div>
  );
};

export default KeyItem;
