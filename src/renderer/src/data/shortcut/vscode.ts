import VSCodeIcon from '@renderer/assets/VSCode.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Raycast';
export const vscodeShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.V, 'control', 'option'],
    toolIcon: VSCodeIcon,
    tool,
    actionName: 'Paste in VSCode',
    raycastExtension: 'Visual Studio Code',
  },
];
