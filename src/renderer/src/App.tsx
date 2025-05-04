import { Vibrant } from 'node-vibrant/browser';
import { type Component, For, JSX, createEffect, createMemo, createSignal } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import tinycolor2 from 'tinycolor2';

import LogoRed from '@renderer/assets/LogoRed.svg';

import { type Key } from '@renderer/types/key';
import { Shortcut } from '@renderer/types/shortcut';

import { keyRows } from '@renderer/data/key';
import { shortcutList } from '@renderer/data/shortcut';

import KeyRow from './components/KeyRow';

const App: Component = () => {
  const [activatingModifier, setActivatingModifier] = createSignal(new Set<string>());
  const [shortcutColors, setShortcutColors] = createSignal<
    Record<string, { primary: string; secondary: string }>
  >({});

  createEffect(() => {
    // listen for key press , if the modifier is pressed, toggle it in the activatingModifier set
    window.addEventListener('keydown', (event) => {
      // alt , control , meta, shift
      const key = event.key.toLowerCase();
      if ('escape' === key) {
        activatingModifier().clear();
        setActivatingModifier(new Set(activatingModifier()));
        return;
      }

      if (!['alt', 'control', 'meta', 'shift'].includes(key)) {
        return;
      }

      // alt -> option, meta -> command
      const modifierKey = key === 'alt' ? 'option' : key === 'meta' ? 'command' : key;
      if (activatingModifier().has(modifierKey)) {
        activatingModifier().delete(modifierKey);
      } else {
        activatingModifier().add(modifierKey);
      }

      setActivatingModifier(new Set(activatingModifier()));
    });
  });

  // Updated to use direct icon references
  createEffect(() => {
    shortcutList.forEach(async (shortcut) => {
      try {
        const iconUrl = shortcut.toolIcon;

        // Extract colors from the image
        const palette = await Vibrant.from(iconUrl).getPalette();
        const primary = palette.LightVibrant?.hex || '#3366FF';
        const secondary = palette.Vibrant?.hex || '#FFCC00';

        setShortcutColors((prev) => ({
          ...prev,
          [shortcut.tool]: { primary, secondary },
        }));
      } catch (error) {
        console.error(`Failed to load icon for ${shortcut.keyCode}:`, error);
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
      onModifierClick(key.keyCode);
    } else {
      console.log('Key pressed:', key.keyCode);
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
    return shortcutListFilteredByModifiers().some((shortcut) => shortcut.keyCode === key);
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
        shortcut.keyCode === key.keyCode &&
        modifiers.every((modifier, index) => modifier === activatingModifiers[index])
      );
    });
  };

  const getKeyStyles = (key: Key): JSX.CSSProperties => {
    if (isShortcutActive(key.keyCode)) {
      const shortcut = getRelativeShortCut(key);
      const colors = shortcutColors()[shortcut?.tool || ''];
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
    // const shortcut = getRelativeShortCut(key);
    // const colors = shortcutColors()[shortcut?.tool || ''];
    return twMerge(
      'relative mx-2 flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-center font-bold text-zinc-200 transition-all duration-150 hover:border-red-500/60 hover:bg-zinc-800 hover:text-red-400',

      key.isModifier ? 'cursor-pointer' : 'cursor-default',

      activatingModifier().has(key.keyCode) ? 'border-red-500 bg-red-500/20' : '',
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
