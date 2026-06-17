import { KeyCode } from './keyCode';

export type ModifierKeyCode = KeyCode.CONTROL | KeyCode.SHIFT | KeyCode.OPTION | KeyCode.COMMAND;

export const modifierUnicodeMap: Record<ModifierKeyCode, string> = {
  [KeyCode.CONTROL]: '⌃',
  [KeyCode.OPTION]: '⌥',
  [KeyCode.SHIFT]: '⇧',
  [KeyCode.COMMAND]: '⌘',
};

/** Canonical modifier key order per Apple HIG: Control → Option → Shift → Command */
export const modifierKeyCodeList: ModifierKeyCode[] = [
  KeyCode.CONTROL,
  KeyCode.OPTION,
  KeyCode.SHIFT,
  KeyCode.COMMAND,
];

export const isModifierKeyCode = (k: string): k is ModifierKeyCode => {
  return modifierKeyCodeList.includes(k as ModifierKeyCode);
};
