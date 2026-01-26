import HomerowIcon from '@renderer/assets/Homerow.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Homerow';
export const homerowShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.SPACE, 'command', 'shift'],
    toolIcon: HomerowIcon,
    tool,
    actionName: 'Homerow Clicking',
  },
  {
    keys: [KeyCode.J, 'command', 'shift'],
    toolIcon: HomerowIcon,
    tool,
    actionName: 'Homerow Scrolling',
  },
  {
    keys: [KeyCode.SLASH, 'command', 'shift'],
    toolIcon: HomerowIcon,
    tool,
    actionName: 'Homerow Search',
  },
];
