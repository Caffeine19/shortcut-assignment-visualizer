import { KeyCode } from './keyCode';

export type Shortcut = {
  keyCode: KeyCode;

  control?: boolean;
  command?: boolean;
  option?: boolean;
  shift?: boolean;

  actionName: string;

  tool: string;
  toolIcon: string;
} & Partial<{
  raycastExtension?: string;
  raycastExtensionIcon?: string;
}>;
