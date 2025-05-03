import { Vibrant } from 'node-vibrant/browser';
import {
  type Component,
  For,
  JSX,
  JSXElement,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from 'solid-js';
import { twMerge } from 'tailwind-merge';
import tinycolor2 from 'tinycolor2';

import LogoRed from '@renderer/assets/LogoRed.svg';

import type { Key } from '@renderer/types/key';
import { Shortcut } from '@renderer/types/shortcut';

import { keyRows } from '@renderer/data/key';
import { shortcutList } from '@renderer/data/shortcut';

interface KeyComponentProps {
  keyData: Key;
  onKeyClick: (key: Key) => void;
  getKeyClass: (key: Key) => string;
  getKeyStyles: (key: Key) => JSX.CSSProperties;
  isShortcutActive: (key: string) => boolean;
  getRelativeShortCut: (key: Key) => Shortcut | undefined;
}

const Key = (props: KeyComponentProps): JSXElement => {
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
      {props.isShortcutActive(props.keyData.key) ? (
        <>
          <img
            src={props.getRelativeShortCut(props.keyData)?.appIcon || ''}
            alt={`Icon for ${props.keyData.key}`}
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
        <span class="text-sm sm:text-base">{props.keyData.label || props.keyData.key}</span>
      )}
    </div>
  );
};

interface KeyRowProps {
  row: Key[];
  onKeyClick: (key: Key) => void;
  getKeyClass: (key: Key) => string;
  getKeyStyles: (key: Key) => JSX.CSSProperties;
  isShortcutActive: (key: string) => boolean;
  getRelativeShortCut: (key: Key) => Shortcut | undefined;
}

const KeyRow = (props: KeyRowProps): JSXElement => (
  <div class="mb-4 flex justify-between">
    <For each={props.row}>
      {(key) => (
        <Key
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

const App: Component = () => {
  const [activatingModifier, setActivatingModifier] = createSignal(new Set<string>());
  const [shortcutColors, setShortcutColors] = createSignal<
    Record<string, { primary: string; secondary: string }>
  >({});

  // Updated to use direct icon references
  createEffect(() => {
    shortcutList.forEach(async (shortcut) => {
      try {
        const iconUrl = shortcut.appIcon;

        // Extract colors from the image
        const palette = await Vibrant.from(iconUrl).getPalette();
        const primary = palette.LightVibrant?.hex || '#3366FF';
        const secondary = palette.LightMuted?.hex || '#FFCC00';

        setShortcutColors((prev) => ({
          ...prev,
          [shortcut.tool]: { primary, secondary },
        }));
      } catch (error) {
        console.error(`Failed to load icon for ${shortcut.key}:`, error);
      }
    });
  });

  const onModifierClick = (key: string): void => {
    if (activatingModifier().has(key)) {
      activatingModifier().delete(key);
    } else {
      activatingModifier().add(key);
    }
    setActivatingModifier(new Set(activatingModifier()));
  };

  const onKeyClick = (key: Key): void => {
    if (key.isModifier) {
      onModifierClick(key.key);
    } else {
      console.log('Key pressed:', key.key);
    }
  };

  const shortcutListFilteredByModifiers = createMemo(() =>
    shortcutList.filter((shortcut) => {
      const modifiers = [
        !!shortcut.control,
        !!shortcut.command,
        !!shortcut.option,
        !!shortcut.shift,
      ]; // updated to use new names
      const activatingModifiers = [
        activatingModifier().has('control'), // changed from ctrl to control
        activatingModifier().has('command'), // changed from cmd to command
        activatingModifier().has('option'),
        activatingModifier().has('shift'), // added shift
      ];
      return modifiers.every((modifier, index) => modifier === activatingModifiers[index]);
    }),
  );

  const isShortcutActive = (key: string): boolean => {
    return shortcutListFilteredByModifiers().some((shortcut) => shortcut.key === key);
  };
  const getRelativeShortCut = (key: Key): Shortcut | undefined => {
    return shortcutList.find((shortcut) => {
      const modifiers = [
        !!shortcut.control,
        !!shortcut.command,
        !!shortcut.option,
        !!shortcut.shift,
      ]; // updated to use new names
      const activatingModifiers = [
        activatingModifier().has('control'), // changed from ctrl to control
        activatingModifier().has('command'), // changed from cmd to command
        activatingModifier().has('option'),
        activatingModifier().has('shift'), // added shift
      ];
      return (
        shortcut.key === key.key &&
        modifiers.every((modifier, index) => modifier === activatingModifiers[index])
      );
    });
  };

  const getKeyStyles = (key: Key): JSX.CSSProperties => {
    if (isShortcutActive(key.key)) {
      const shortcut = getRelativeShortCut(key);
      console.log('🚀 ~ App.tsx:432 ~ shortcut:', shortcut);
      const colors = shortcutColors()[shortcut?.tool || ''];
      console.log('🚀 ~ App.tsx:187 ~ getKeyStyles ~ colors:', colors);
      if (colors) {
        return {
          width: `${key.span * 5}rem`,
          height: '5rem',
          'border-color': colors.primary,
          background: `radial-gradient(circle, ${tinycolor2(colors.primary).setAlpha(0.3).toRgbString()} 10%, ${tinycolor2(colors.secondary).setAlpha(0.1).toRgbString()} 100%)`,
        };
      }
    }

    return {
      width: `${key.span * 5}rem`,
      height: '5rem',
    };
  };

  const getKeyClass = (key: Key): string => {
    const isActive = isShortcutActive(key.key);
    // const shortcut = getRelativeShortCut(key);
    // const colors = shortcutColors()[shortcut?.tool || ''];
    return twMerge(
      'relative mx-2 flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-center font-bold text-zinc-200 transition-all duration-150 hover:border-red-500/60 hover:bg-zinc-800 hover:text-red-400',

      key.isModifier ? 'cursor-pointer' : 'cursor-default',

      activatingModifier().has(key.key) ? 'border-red-500 bg-red-500/20' : '',

      isActive && !shortcutColors()[key.key]
        ? 'border-amber-500 bg-amber-500/20 hover:text-amber-400'
        : '',
    );
  };

  return (
    <>
      <div
        style={{
          '-webkit-app-region': 'drag',
        }}
        class="flex h-screen w-screen flex-col items-center justify-between gap-12 overflow-hidden"
      >
        <div class="flex items-center gap-4 pt-4">
          <img src={LogoRed} class="h-6 w-6" />
          <span class="font-mono text-red-400">Shortcut Assignment Visualizer</span>
        </div>
        <div class="flex grow items-center justify-center">
          <div class="rounded-xl bg-black p-8">
            <div
              style={{ '-webkit-app-region': 'no-drag' }}
              class="flex flex-col items-stretch justify-center"
            >
              <For each={keyRows}>
                {(row) => (
                  <KeyRow
                    row={row}
                    onKeyClick={onKeyClick}
                    getKeyClass={getKeyClass}
                    getKeyStyles={getKeyStyles}
                    isShortcutActive={isShortcutActive}
                    getRelativeShortCut={getRelativeShortCut}
                  />
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
