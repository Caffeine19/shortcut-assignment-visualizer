import { KeyCode } from './keyCode';

export interface Key {
  keyCode: KeyCode;

  label?: string;
  isModifier?: boolean;

  span: number;
}
