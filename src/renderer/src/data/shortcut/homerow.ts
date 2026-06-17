import HomerowIcon from '@renderer/assets/Homerow.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Homerow';
export const homerowShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.SPACE, 'shift', 'command'],
    toolIcon: HomerowIcon,
    tool,
    actionName: 'Homerow Clicking',
  },
  {
    keys: [KeyCode.J, 'shift', 'command'],
    toolIcon: HomerowIcon,
    tool,
    actionName: 'Homerow Scrolling',
  },
  {
    keys: [KeyCode.SLASH, 'shift', 'command'],
    toolIcon: HomerowIcon,
    tool,
    actionName: 'Homerow Search',
  },
];
