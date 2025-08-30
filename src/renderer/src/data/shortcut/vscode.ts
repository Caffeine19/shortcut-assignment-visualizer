import VSCodeIcon from '@renderer/assets/VSCode.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Raycast';
export const vscodeShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.V,
    control: true,
    command: false,
    option: true,
    toolIcon: VSCodeIcon,
    tool,
    actionName: 'Paste in VSCode',
    raycastExtension: 'Visual Studio Code',
  },
];
