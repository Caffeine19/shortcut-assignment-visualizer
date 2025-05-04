import { type Component, For } from 'solid-js';

import LogoRed from '@renderer/assets/LogoRed.svg';

import KeyRow from './components/KeyRow';
import { useKeyDown } from './hooks/useKeydown';
import { useKeyRowStore } from './stores/key';

const App: Component = () => {
  useKeyDown();

  const keyRowStore = useKeyRowStore();

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
              <For each={keyRowStore.keyRowList()}>{(row) => <KeyRow row={row} />}</For>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
