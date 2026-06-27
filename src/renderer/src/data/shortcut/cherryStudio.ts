import CherryStudioIcon from '@renderer/assets/CherryStudio.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const cherryStudioShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.THREE, 'option'],
    toolIcon: CherryStudioIcon,
    tool: 'Cherry Studio',
    actionName: 'Open Cherry Studio',
  },
];
