import IceIcon from '@renderer/assets/Ice.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Ice';
export const iceShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.I,
    control: true,
    command: true,
    option: false,
    toolIcon: IceIcon,
    tool,
    actionName: 'Enable the Ice Bar',
  },
  {
    keyCode: KeyCode.I,
    shift: false,
    control: true,
    command: false,
    option: true,
    toolIcon: IceIcon,
    tool,
    actionName: 'Search menu bar items',
  },
];
