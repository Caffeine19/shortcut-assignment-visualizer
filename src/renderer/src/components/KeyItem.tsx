import { Vibrant } from 'node-vibrant/browser';
import { JSX, Show, createEffect, createMemo, createSignal } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import tinycolor2 from 'tinycolor2';

import type { Key } from '@renderer/types/key';
import { ModifierKeyCode, isModifierKeyCode } from '@renderer/types/modifier';

import { useKeyRowStore } from '@renderer/stores/key';
import { useShortcutStore } from '@renderer/stores/shortcut';

import KeyTooltip from './KeyTooltip';
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
  const [iconColorHoverStyle, setIconColorHoverStyle] = createSignal<JSX.CSSProperties>({});
  const updateIconColorStyles = async () => {
    const currentShortcut = shortcut();
    const src = currentShortcut?.raycastExtensionIcon || currentShortcut?.toolIcon;
    if (!src) {
      setIconColorStyle({});
      setIconColorHoverStyle({});
      return;
    }

    let primary: string;
    let secondary: string;

    // Use hardcoded colors if provided, otherwise extract via Vibrant
    if (currentShortcut?.iconColors) {
      primary = currentShortcut.iconColors.primary;
      secondary = currentShortcut.iconColors.secondary;
    } else {
      const palette = await Vibrant.from(src).getPalette();
      primary = palette.LightVibrant?.hex || 'transparent';
      secondary = palette.Vibrant?.hex || 'transparent';
    }

    setIconColorStyle({
      'border-color': tinycolor2(primary).setAlpha(0.2).toRgbString(),
      background: `radial-gradient(circle, ${tinycolor2(primary).setAlpha(0.3).toRgbString()} 10%, ${tinycolor2(secondary).setAlpha(0.1).toRgbString()} 100%)`,
    });
    setIconColorHoverStyle({
      'border-color': tinycolor2(primary).setAlpha(0.7).toRgbString(),
      background: `radial-gradient(circle, ${tinycolor2(primary).setAlpha(0.6).toRgbString()} 10%, ${tinycolor2(secondary).setAlpha(0.3).toRgbString()} 100%)`,
    });
  };
  createEffect(updateIconColorStyles);

  const isKeyboardPressed = createMemo(() => {
    const isInteractive = props.isInteractive ?? true;
    return isInteractive && keyRowStore.pressedKeyCodes().has(props.key.keyCode);
  });

  createEffect(() => {
    const el = keyElement();
    if (!el) return;
    if (isKeyboardPressed()) {
      el.classList.add('translate-y-[1px]', 'shadow-inner');
      setHovered(true);
    } else {
      el.classList.remove('translate-y-[1px]', 'shadow-inner');
      // Only clear hovered if mouse isn't actually over the element
      if (!el.matches(':hover')) {
        setHovered(false);
      }
    }
  });

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
        ...(hovered() && shortcut() ? iconColorHoverStyle() : iconColorStyle()),
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
          <Show when={hovered() && shortcut()}>
            <KeyTooltip shortcut={shortcut()!} position={tooltipPosition()} />
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
