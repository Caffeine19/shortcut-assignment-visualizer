import AirBuddyIcon from '@renderer/assets/AirBuddy.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const airBuddyShortcutList: Shortcut[] = [
  {
    keys: [
      [KeyCode.BACKSLASH, 'control', 'shift', 'command'],
      ['right_command', 'right_command'],
    ],
    toolIcon: AirBuddyIcon,
    tool: 'AirBuddy',
    actionName: 'Switch listening modes',
  },
];
