import { AudioLines } from 'lucide-solid';
import { type Component, For, Show } from 'solid-js';

import LogoRed from '@renderer/assets/LogoRed.svg';

import KeyRow from '@renderer/components/KeyRow';
import { useListeningForModifierKeyDown } from '@renderer/hooks/useListeningForModifierKeyDown';
import { useKeyRowStore } from '@renderer/stores/key';

const TitleBar = () => (
  <div class="flex items-center gap-4 pt-4">
    <img src={LogoRed} class="h-6 w-6" />
    <span class="font-mono text-red-400">Shortcut Assignment Visualizer</span>
  </div>
);

const App: Component = () => {
  const { isListening } = useListeningForModifierKeyDown();
  const keyRowStore = useKeyRowStore();

  return (
    <>
      <div
        style={{
          '-webkit-app-region': 'drag',
        }}
        class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      >
        <TitleBar />
        <div class="flex grow flex-col items-center justify-center">
          <div class="rounded-xl bg-black p-8">
            <div
              style={{ '-webkit-app-region': 'no-drag' }}
              class="flex flex-col items-stretch justify-center"
            >
              <For each={keyRowStore.keyRowList()}>{(row) => <KeyRow row={row} />}</For>
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
                Use Command + K to toggle listening for modifier
              </span>
            </Show>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
