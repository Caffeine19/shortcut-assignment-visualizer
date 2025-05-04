import { KeyCode } from './keyCode';

interface BaseShortcut {
  keyCode: KeyCode;
  control?: boolean;
  command?: boolean;
  option?: boolean;
  shift?: boolean;
  actionName: string;
  colors?: {
    primary: string;
    secondary: string;
  };
}

interface RegularShortcut extends BaseShortcut {
  tool: Exclude<string, 'Raycast'>; // Any string except 'Raycast'
  toolIcon: string;
}

interface RaycastShortcut extends BaseShortcut {
  tool: 'Raycast';
  toolIcon: string;
  raycastExtension?: string;
  raycastExtensionIcon?: string;
}

export type Shortcut = RegularShortcut | RaycastShortcut;
