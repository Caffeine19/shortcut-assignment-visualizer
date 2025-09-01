import { ArrowBigRightDash, Blocks, Hammer, Keyboard } from 'lucide-solid';
import { Vibrant } from 'node-vibrant/browser';
import { JSX, Show, createEffect, createMemo, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import { twMerge } from 'tailwind-merge';
import tinycolor2 from 'tinycolor2';

import type { Key } from '@renderer/types/key';
import { ModifierKeyCode, isModifierKeyCode } from '@renderer/types/modifier';

import { useKeyRowStore } from '@renderer/stores/key';
import { useShortcutStore } from '@renderer/stores/shortcut';

import RaycastExtensionMark from './RaycastExtensionMark';

export interface KeyProps {
  key: Key;
  forcedModifiers?: Set<ModifierKeyCode>;
  isInteractive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const KeyItem = (props: KeyProps) => {
  const keyRowStore = useKeyRowStore();
  const shortcutStore = useShortcutStore();

  const [hovered, setHovered] = createSignal(false);
  const [keyElement, setKeyElement] = createSignal<HTMLElement>();
  const [tooltipPosition, setTooltipPosition] = createSignal({ x: 0, y: 0 });

  const onModifierClick = (modifierKeyCode: ModifierKeyCode) => {
    keyRowStore.toggleActivatedModifier(modifierKeyCode);
  };

  const onKeyClick = () => {
    const isInteractive = props.isInteractive ?? true;
    if (!isInteractive) return;

    if (isModifierKeyCode(props.key.keyCode)) {
      onModifierClick(props.key.keyCode);
    }
  };

  const shortcut = createMemo(() => {
    if (props.forcedModifiers) {
      return shortcutStore.getShortcutByKeyWithModifiers(props.key, props.forcedModifiers);
    }
    return shortcutStore.getRelativeShortcutByKey(props.key);
  });

  const keyClass = createMemo(() => {
    const isInteractive = props.isInteractive ?? true;
    const activatedModifiers = props.forcedModifiers || keyRowStore.activatedModifierList();

    return twMerge(
      'relative flex items-center justify-center border border-zinc-800 bg-zinc-900 text-center font-bold text-zinc-200 transition-all duration-150',

      props.size === 'sm'
        ? 'mx-1 rounded-sm first:ml-0 last:mr-0'
        : 'mx-2 rounded-md first:ml-0 last:mr-0',

      isInteractive && 'hover:border-red-500/60 hover:bg-zinc-800 hover:text-red-400',

      isModifierKeyCode(props.key.keyCode)
        ? activatedModifiers.has(props.key.keyCode)
          ? 'border-red-500 bg-red-500/20'
          : isInteractive && 'cursor-pointer'
        : '',
    );
  });

  const keySpanStyle = createMemo(() => {
    const span = props.key.span || 1;
    const rem = props.size === 'sm' ? 2.8 : 5;
    return {
      width: `${span * rem}rem`,
      height: `${rem}rem`,
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
      'border-color': tinycolor2(primary).setAlpha(0.4).toRgbString(),
      background: `radial-gradient(circle, ${tinycolor2(primary).setAlpha(0.3).toRgbString()} 10%, ${tinycolor2(secondary).setAlpha(0.1).toRgbString()} 100%)`,
    });
  };
  createEffect(updateIconColorStyles);

  createEffect(() => {
    const element = keyElement();
    if (hovered() && element) {
      const rect = element.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    }
  });

  return (
    <div
      onClick={() => onKeyClick()}
      class={keyClass()}
      style={{
        ...keySpanStyle(),
        ...iconColorStyle(),
      }}
      onMouseDown={(e) => {
        e.currentTarget.classList.add('translate-y-[1px]', 'shadow-inner');
      }}
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
      ref={setKeyElement}
    >
      {shortcut() ? (
        <>
          <img
            src={shortcut()?.raycastExtensionIcon || shortcut()?.toolIcon}
            alt={`Icon for ${props.key.keyCode}`}
            class={twMerge(
              'object-contain',
              props.size === 'sm' ? 'h-6 w-6' : props.size === 'lg' ? 'h-12 w-12' : 'h-12 w-12',
              shortcut()?.raycastExtensionIcon &&
                (props.size === 'sm'
                  ? 'h-5 w-5'
                  : props.size === 'lg'
                    ? 'h-9.5 w-9.5'
                    : 'h-9.5 w-9.5'),
            )}
          />
          <Show when={shortcut()?.raycastExtension}>
            <RaycastExtensionMark size={props.size} />
          </Show>
          <Show when={hovered()}>
            <Portal>
              <ul
                class="fixed z-50 flex min-w-80 flex-col gap-2 rounded-md border border-zinc-800 bg-zinc-900/40 p-4 text-base text-zinc-200 backdrop-blur-2xl"
                style={{
                  'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
                  'max-height': 'calc(100vh - 8rem)',
                  overflow: 'auto',
                  'font-size': '0.875rem',
                  left: `${tooltipPosition().x}px`,
                  top: `${tooltipPosition().y - 16}px`,
                  transform: 'translateX(-50%) translateY(-100%)',
                }}
              >
                <li class="flex items-center gap-3">
                  <Hammer />
                  <span class="break-keep whitespace-nowrap">{shortcut()?.tool}</span>
                </li>
                <Show when={shortcut()?.raycastExtension}>
                  <li class="flex items-center gap-3">
                    <Blocks />
                    <span class="break-keep whitespace-nowrap">{shortcut()?.raycastExtension}</span>
                  </li>
                </Show>
                <li class="flex items-center gap-3">
                  <ArrowBigRightDash />
                  <span class="break-keep whitespace-nowrap">{shortcut()?.actionName}</span>
                </li>

                <div class="my-1 h-[1px] w-full border-b border-zinc-700" />

                <li class="flex items-center gap-3">
                  <Keyboard />
                  <div class="flex items-center gap-2 font-mono text-sm">
                    <Show when={shortcut()?.command}>
                      <span class="rounded bg-zinc-50/10 px-2 py-1">
                        {shortcut()?.command && 'Command'}
                      </span>
                    </Show>

                    <Show when={shortcut()?.option}>
                      <span class="rounded bg-zinc-50/10 px-2 py-1">
                        {shortcut()?.option && 'Option'}
                      </span>
                    </Show>

                    <Show when={shortcut()?.shift}>
                      <span class="rounded bg-zinc-50/10 px-2 py-1">
                        {shortcut()?.shift && 'Shift'}
                      </span>
                    </Show>

                    <Show when={shortcut()?.control}>
                      <span class="rounded bg-zinc-50/10 px-2 py-1">
                        {shortcut()?.control && 'Control'}
                      </span>
                    </Show>

                    <span class="rounded bg-zinc-50/10 px-2 py-1">
                      {shortcut()?.keyCode.toUpperCase()}
                    </span>
                  </div>
                </li>
              </ul>
            </Portal>
          </Show>
        </>
      ) : (
        <span class={props.size === 'sm' ? 'text-xs' : props.size === 'lg' ? 'text-lg' : 'text-sm'}>
          {props.key.label || props.key.keyCode}
        </span>
      )}
    </div>
  );
};

export default KeyItem;
