import { AudioLines, Columns, Columns2, Keyboard, LayoutGrid } from 'lucide-solid';
import { type Component, For, Show, createSignal, onCleanup, onMount } from 'solid-js';

import KeyRow from '@renderer/components/KeyRow';
import KeyboardView from '@renderer/components/KeyboardView';
import SearchModal from '@renderer/components/SearchModal';

import LogoRed from '@renderer/assets/LogoRed.svg';

import { KeyCode } from '@renderer/types/keyCode';

import { useContainerQuery } from '@renderer/hooks/useContainerQuery';
import { useListeningForModifierKeyDown } from '@renderer/hooks/useListeningForModifierKeyDown';
import { useKeyRowStore } from '@renderer/stores/key';
import { useSearchStore } from '@renderer/stores/search';

import { ModifierKeyCode } from './types/modifier';

const TitleBar = () => (
  <div class="flex items-center gap-4 pt-4">
    <img src={LogoRed} class="h-6 w-6" />
    <span class="font-mono text-red-400">Shortcut Assignment Visualizer</span>
  </div>
);

const App: Component = () => {
  const { isListening } = useListeningForModifierKeyDown();
  const keyRowStore = useKeyRowStore();
  const searchStore = useSearchStore();
  const [viewMode, setViewMode] = createSignal<'single' | 'multi'>('single');
  const [gridContainer, setGridContainer] = createSignal<HTMLElement>();
  const containerQuery = useContainerQuery(gridContainer);
  const [multiViewCols, setMultiViewCols] = createSignal<1 | 2>(2);

  // Setup global search shortcut listener
  onMount(() => {
    const cleanup = window.api?.onToggleSearch(() => {
      searchStore.toggleSearch();
    });
    
    onCleanup(() => {
      cleanup?.();
    });
  });

  const multiViewConfigs = [
    {
      title: 'Control + Option View',
      modifiers: [KeyCode.CONTROL, KeyCode.OPTION] satisfies ModifierKeyCode[],
    },
    {
      title: 'Command + Control View',
      modifiers: [KeyCode.COMMAND, KeyCode.CONTROL] satisfies ModifierKeyCode[],
    },
    {
      title: 'Command + Shift View',
      modifiers: [KeyCode.COMMAND, KeyCode.SHIFT] satisfies ModifierKeyCode[],
    },
    {
      title: 'Option View',
      modifiers: [KeyCode.OPTION] satisfies ModifierKeyCode[],
    },
  ];

  return (
    <>
      <SearchModal />
      <div
        style={{
          '-webkit-app-region': 'drag',
        }}
        class="flex h-screen w-screen flex-col items-center overflow-hidden"
      >
        <TitleBar />

        <div
          class="flex w-full grow flex-col items-center justify-center gap-4 overflow-hidden"
          ref={setGridContainer}
        >
          <div class="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setViewMode('single')}
              class={`flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-sm transition-all ${
                viewMode() === 'single'
                  ? 'border border-red-500/60 bg-red-500/20 text-red-400'
                  : 'border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
              style={{ '-webkit-app-region': 'no-drag' }}
            >
              <Keyboard size={16} />
              Single View
            </button>
            <button
              onClick={() => setViewMode('multi')}
              class={`flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-sm transition-all ${
                viewMode() === 'multi'
                  ? 'border border-red-500/60 bg-red-500/20 text-red-400'
                  : 'border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
              }`}
              style={{ '-webkit-app-region': 'no-drag' }}
            >
              <LayoutGrid size={16} />
              Multi View
            </button>

            <Show when={viewMode() === 'multi' && containerQuery.when('10xl')}>
              <button
                onClick={() => setMultiViewCols(multiViewCols() === 2 ? 1 : 2)}
                class="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 font-mono text-sm text-zinc-400 transition-all hover:bg-zinc-700"
                style={{ '-webkit-app-region': 'no-drag' }}
              >
                {multiViewCols() === 2 ? <Columns size={16} /> : <Columns2 size={16} />}
                {multiViewCols() === 2 ? '1 Column' : '2 Columns'}
              </button>
            </Show>
          </div>

          <Show when={viewMode() === 'single'}>
            <div class="flex flex-col items-center justify-center">
              <div class="rounded-xl bg-black p-8">
                <div
                  style={{ '-webkit-app-region': 'no-drag' }}
                  class="flex flex-col items-stretch justify-center"
                >
                  <For each={keyRowStore.keyRowList()}>
                    {(row) => (
                      <KeyRow
                        last={row === keyRowStore.keyRowList()[keyRowStore.keyRowList().length - 1]}
                        row={row}
                      />
                    )}
                  </For>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-4">
                <Show
                  when={!isListening()}
                  fallback={
                    <>
                      <AudioLines size={24} class="text-red-600" />
                      <span class="font-mono text-red-600">Listening for modifier key...</span>
                    </>
                  }
                >
                  <span class="font-mono text-neutral-500">
                    Use Command + K to start listening for modifier • Ctrl/Cmd + Shift + Space for search
                  </span>
                </Show>
              </div>
            </div>
          </Show>

          <Show when={viewMode() === 'multi'}>
            <div class="flex overflow-hidden p-4 pb-12">
              <div
                class={`grid w-full gap-x-4 gap-y-12 overflow-y-auto ${
                  containerQuery.when('10xl') && multiViewCols() === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-1'
                }`}
                style={{ '-webkit-app-region': 'no-drag' }}
              >
                <For each={multiViewConfigs}>
                  {(config) => (
                    <KeyboardView
                      size={containerQuery.when('10xl') && multiViewCols() === 2 ? 'sm' : 'md'}
                      title={config.title}
                      modifiers={config.modifiers}
                    />
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
};

export default App;
