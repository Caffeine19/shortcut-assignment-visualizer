import { createElementSize } from '@solid-primitives/resize-observer';
import { Accessor, createEffect, createSignal } from 'solid-js';

/**
 * A hook that provides reactive container query functionality similar to Tailwind's @container
 * queries.
 *
 * @example
 *   ```typescript
 *   const [container, setContainer] = createSignal<HTMLElement>();
 *   const query = useContainerQuery(container);
 *
 *   return (
 *     <div ref={setContainer} class="@container">
 *       <div class={query('md') ? "grid-cols-3" : "grid-cols-1"}>
 *         Content adapts to container size
 *       </div>
 *     </div>
 *   );
 *   ```;
 *
 * @param element - Accessor that returns the HTML element to observe
 * @returns Callable function with breakpoint query methods and utilities
 */

/**
 * Tailwind container query breakpoints (based on Tailwind CSS documentation)
 *
 * These breakpoints match Tailwind's @container query system exactly:
 *
 * - 3xs: 16rem (256px) - Extra small containers
 * - 2xs: 18rem (288px) - Very small containers
 * - Xs: 20rem (320px) - Small containers
 * - Sm: 24rem (384px) - Small-medium containers
 * - Md: 28rem (448px) - Medium containers
 * - Lg: 32rem (512px) - Large containers
 * - Xl: 36rem (576px) - Extra large containers
 * - 2xl: 42rem (672px) - 2x extra large containers
 * - 3xl: 48rem (768px) - 3x extra large containers
 * - 4xl: 56rem (896px) - 4x extra large containers
 * - 5xl: 64rem (1024px) - 5x extra large containers
 * - 6xl: 72rem (1152px) - 6x extra large containers
 * - 7xl: 80rem (1280px) - 7x extra large containers
 * - 8xl: 88rem (1408px) - 8x extra large containers
 * - 9xl: 96rem (1536px) - 9x extra large containers
 * - 10xl: 104rem (1664px) - 10x extra large containers
 * - 11xl: 112rem (1792px) - 11x extra large containers
 * - 12xl: 120rem (1920px) - 12x extra large containers
 */
export const containerBreakpoints = {
  '3xs': '16rem',
  '2xs': '18rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '88rem',
  '9xl': '96rem',
  '10xl': '104rem',
  '11xl': '112rem',
  '12xl': '120rem',
} as const;

export type ContainerBreakpoint = keyof typeof containerBreakpoints;

/**
 * A hook that provides reactive container query functionality similar to Tailwind's @container
 * queries.
 *
 * @example
 *   ```typescript
 *   const [container, setContainer] = createSignal<HTMLElement>();
 *   const query = useContainerQuery(container);
 *
 *   return (
 *     <div ref={setContainer} class="@container">
 *       <div class={query.when('md') ? "grid-cols-3" : "grid-cols-1"}>
 *         Content adapts to container size
 *       </div>
 *     </div>
 *   );
 *   ```;
 *
 * @param element - Accessor that returns the HTML element to observe
 * @returns Object with breakpoint query methods and utilities
 */
export function useContainerQuery(element: Accessor<HTMLElement | undefined>) {
  // Use solid-primitives to observe element size
  const size = createElementSize(element);

  // Create boolean signals for each breakpoint
  const [breakpoints, setBreakpoints] = createSignal<Record<ContainerBreakpoint, boolean>>({
    '3xs': false,
    '2xs': false,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
    '3xl': false,
    '4xl': false,
    '5xl': false,
    '6xl': false,
    '7xl': false,
    '8xl': false,
    '9xl': false,
    '10xl': false,
    '11xl': false,
    '12xl': false,
  });

  /**
   * Helper function to convert rem to pixels
   *
   * @param rem - The rem value as a string (e.g., "16rem")
   * @returns The equivalent pixel value based on root font size
   */
  const remToPx = (rem: string): number => {
    const remValue = parseFloat(rem);
    /** Get the root font size (default is typically 16px) */
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return remValue * rootFontSize;
  };

  /**
   * Function to update breakpoint states based on current width
   *
   * @param currentWidth - The current container width in pixels
   */
  const updateBreakpoints = (currentWidth: number) => {
    const newBreakpoints: Record<ContainerBreakpoint, boolean> = {
      '3xs': false,
      '2xs': false,
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      '2xl': false,
      '3xl': false,
      '4xl': false,
      '5xl': false,
      '6xl': false,
      '7xl': false,
      '8xl': false,
      '9xl': false,
      '10xl': false,
      '11xl': false,
      '12xl': false,
    };

    // Set breakpoints to true if container width is >= breakpoint width
    Object.entries(containerBreakpoints).forEach(([key, value]) => {
      const breakpointPx = remToPx(value);
      newBreakpoints[key] = currentWidth >= breakpointPx;
    });

    setBreakpoints(newBreakpoints);
  };

  // Update breakpoints whenever the element size changes
  createEffect(() => {
    const width = size.width;
    if (width != null) {
      updateBreakpoints(width);
    }
  });

  /**
   * Direct breakpoint check function
   *
   * @param breakpoint - The container breakpoint to check
   * @returns True if the container width is greater than or equal to the breakpoint
   */
  const when = (breakpoint: ContainerBreakpoint): boolean => {
    return breakpoints()[breakpoint];
  };

  const width = () => size.width ?? 0;
  const height = () => size.height ?? 0;

  /** Check if container width is greater than or equal to a specific breakpoint */
  const gte = (breakpoint: ContainerBreakpoint) => breakpoints()[breakpoint];

  /** Check if container width is less than a specific breakpoint */
  const lt = (breakpoint: ContainerBreakpoint) => !breakpoints()[breakpoint];

  /** Get the current active breakpoint (largest one that matches) */
  const current = (): ContainerBreakpoint | null => {
    const bp = breakpoints();
    const breakpointEntries = Object.entries(containerBreakpoints).reverse(); // Start from largest

    for (const [key] of breakpointEntries) {
      if (bp[key]) {
        return key as ContainerBreakpoint;
      }
    }
    return null;
  };

  /** Check if container is within a range of breakpoints (inclusive) */
  const between = (min: ContainerBreakpoint, max: ContainerBreakpoint): boolean => {
    const bp = breakpoints();
    return bp[min] && !bp[max];
  };

  // Return object with query methods
  return {
    when,
    width,
    height,
    gte,
    lt,
    current,
    between,
  };
}
