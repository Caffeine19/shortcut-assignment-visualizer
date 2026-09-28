import { ArrowBigRightDash, Blocks, Hammer, Keyboard } from 'lucide-solid';
import { For, Show, createEffect, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';

import type {
  NormalizedComboBinding,
  NormalizedDoubleBinding,
  NormalizedShortcut,
} from '@renderer/types/shortcut';

interface KeyTooltipProps {
  shortcut: NormalizedShortcut;
  position: { x: number; y: number };
}

/** Human-readable label for a double-press binding, e.g. `Left Shift` or `Command` */
const doubleBindingLabel = (binding: NormalizedDoubleBinding): string => {
  const side = binding.side ? (binding.side === 'left' ? 'Left' : 'Right') : '';
  const key = binding.key.charAt(0).toUpperCase() + binding.key.slice(1);
  return `${side} ${key}`.trim();
};

/** Key chips for a regular combo binding */
const ComboChips = (props: { binding: NormalizedComboBinding }) => (
  <>
    <Show when={props.binding.command}>
      <span class="rounded bg-zinc-50/10 px-2 py-1">Command</span>
    </Show>
    <Show when={props.binding.control}>
      <span class="rounded bg-zinc-50/10 px-2 py-1">Control</span>
    </Show>
    <Show when={props.binding.option}>
      <span class="rounded bg-zinc-50/10 px-2 py-1">Option</span>
    </Show>
    <Show when={props.binding.shift}>
      <span class="rounded bg-zinc-50/10 px-2 py-1">Shift</span>
    </Show>
    <span class="rounded bg-zinc-50/10 px-2 py-1">{props.binding.keyCode.toUpperCase()}</span>
  </>
);

/** Key chips for a double-press binding: the modifier twice plus a `double` tag */
const DoubleChips = (props: { binding: NormalizedDoubleBinding }) => (
  <>
    <span class="rounded bg-zinc-50/10 px-2 py-1">{doubleBindingLabel(props.binding)}</span>
    <span class="rounded bg-zinc-50/10 px-2 py-1">{doubleBindingLabel(props.binding)}</span>
  </>
);

const KeyTooltip = (props: KeyTooltipProps) => {
  const [tooltipEl, setTooltipEl] = createSignal<HTMLElement>();

  createEffect(() => {
    const el = tooltipEl();
    if (!el) return;
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const margin = 8;
      if (rect.right > vw - margin) {
        el.style.left = `${vw - rect.width - margin}px`;
        el.style.transform = 'translateY(-100%)';
      } else if (rect.left < margin) {
        el.style.left = `${margin}px`;
        el.style.transform = 'translateY(-100%)';
      }
    });
  });

  return (
    <Portal>
      <ul
        ref={setTooltipEl}
        class="fixed z-50 flex min-w-80 flex-col gap-2 rounded-md border border-zinc-800 bg-zinc-950 p-4 text-base text-zinc-200 shadow-2xl"
        style={{
          'max-height': 'calc(100vh - 8rem)',
          overflow: 'auto',
          'font-size': '0.875rem',
          left: `${props.position.x}px`,
          top: `${props.position.y - 16}px`,
          transform: 'translateX(-50%) translateY(-100%)',
        }}
      >
        <li class="flex items-center gap-3">
          <Hammer />
          <span class="break-keep whitespace-nowrap">{props.shortcut.tool}</span>
        </li>
        <Show when={props.shortcut.raycastExtension}>
          <li class="flex items-center gap-3">
            <Blocks />
            <span class="break-keep whitespace-nowrap">{props.shortcut.raycastExtension}</span>
          </li>
        </Show>
        <li class="flex items-center gap-3">
          <ArrowBigRightDash />
          <span class="break-keep whitespace-nowrap">{props.shortcut.actionName}</span>
        </li>

        <div class="my-1 h-[1px] w-full border-b border-zinc-700" />

        <li class="flex items-center gap-3">
          <Keyboard />
          <div class="flex items-center gap-2 font-mono text-sm whitespace-nowrap">
            <For each={props.shortcut.bindings}>
              {(binding, index) => (
                <div class="flex items-center gap-2">
                  <Show when={index() > 0}>
                    <span class="text-zinc-500">/</span>
                  </Show>
                  {binding.kind === 'combo' ? (
                    <ComboChips binding={binding} />
                  ) : (
                    <DoubleChips binding={binding} />
                  )}
                </div>
              )}
            </For>
          </div>
        </li>
      </ul>
    </Portal>
  );
};

export default KeyTooltip;
