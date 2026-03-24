import FinderIcon from '@renderer/assets/Finder.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'System';
export const systemShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.SEMICOLON, 'command', 'control'],
    toolIcon: FinderIcon,
    tool,
    actionName: 'Arrange Left and Right',
  },
  {
    keys: [KeyCode.QUOTE, 'command', 'control'],
    toolIcon: FinderIcon,
    tool,
    actionName: 'Arrange Right and Left',
  },
];
