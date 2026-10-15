import VSCodeIcon from '@renderer/assets/VSCode.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Raycast';
export const vscodeShortcutList: Shortcut[] = [
  {
    keys: [[KeyCode.C, 'control', 'option']],
    toolIcon: VSCodeIcon,
    tool,
    actionName: 'Search Recent Projects',
    raycastExtension: 'Visual Studio Code',
  },
];
