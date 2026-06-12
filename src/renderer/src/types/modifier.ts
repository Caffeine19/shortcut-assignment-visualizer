import { KeyCode } from './keyCode';

export type ModifierKeyCode = KeyCode.CONTROL | KeyCode.SHIFT | KeyCode.OPTION | KeyCode.COMMAND;

export const modifierUnicodeMap: Record<ModifierKeyCode, string> = {
  [KeyCode.COMMAND]: '⌘',
  [KeyCode.OPTION]: '⌥',
  [KeyCode.CONTROL]: '⌃',
  [KeyCode.SHIFT]: '⇧',
};

export const modifierKeyCodeList: ModifierKeyCode[] = [
  KeyCode.CONTROL,
  KeyCode.SHIFT,
  KeyCode.OPTION,
  KeyCode.COMMAND,
];

export const isModifierKeyCode = (k: string): k is ModifierKeyCode => {
  return modifierKeyCodeList.includes(k as ModifierKeyCode);
};
