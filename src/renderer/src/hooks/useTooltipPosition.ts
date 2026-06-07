import { Accessor, createEffect, createSignal } from 'solid-js';

/**
 * Hook that tracks the tooltip position for a hovered element.
 *
 * @example
 *   ```typescript
 *   const [hovered, setHovered] = createSignal(false);
 *   const [keyElement, setKeyElement] = createSignal<HTMLElement>();
 *   const tooltipPosition = useTooltipPosition(keyElement, hovered);
 *
 *   return (
 *     <div ref={setKeyElement} onMouseEnter={() => setHovered(true)}>
 *       <Tooltip position={tooltipPosition()} />
 *     </div>
 *   );
 *   ```;
 *
 * @param element - Accessor that returns the HTML element to track
 * @param isHovered - Accessor indicating whether the element is hovered
 * @returns Accessor for the tooltip position { x, y }
 */
export function useTooltipPosition(
  element: Accessor<HTMLElement | undefined>,
  isHovered: Accessor<boolean>,
) {
  const [position, setPosition] = createSignal({ x: 0, y: 0 });

  createEffect(() => {
    const el = element();
    if (isHovered() && el) {
      const rect = el.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    }
  });

  return position;
}
