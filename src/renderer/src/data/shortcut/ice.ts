import IceIcon from '@renderer/assets/Ice.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Ice';
export const iceShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.I, 'option'],
    toolIcon: IceIcon,
    tool,
    actionName: 'Enable the Ice Bar',
  },
  {
    keys: [KeyCode.I, 'control', 'option'],
    toolIcon: IceIcon,
    tool,
    actionName: 'Search menu bar items',
  },
];
