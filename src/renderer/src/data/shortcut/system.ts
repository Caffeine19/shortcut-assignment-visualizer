import FinderIcon from '@renderer/assets/Finder.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'System';
export const systemShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.SEMICOLON,
    control: true,
    command: true,
    option: false,
    toolIcon: FinderIcon,
    tool,
    actionName: 'Arrange Left and Right',
  },

  {
    keyCode: KeyCode.QUOTE,
    control: true,
    command: true,
    option: false,
    toolIcon: FinderIcon,
    tool,
    actionName: 'Arrange Right and Left',
  },
];
