import { KeyCode } from './keyCode';

export interface Key {
  keyCode: KeyCode;
  label?: string;

  span: number;

  /**
   * Which hand this physical key belongs to, only set on paired modifier keys. Used by Double View
   * to highlight side-specific double-press bindings.
   */
  side?: 'left' | 'right';
}
