import HomerowIcon from '@renderer/assets/Homerow.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Homerow';
export const homerowShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.SPACE,
    control: false,
    command: true,
    option: false,
    toolIcon: HomerowIcon,
    shift: true,
    tool,
    actionName: 'Homerow Clicking',
  },
  {
    keyCode: KeyCode.J,
    control: false,
    command: true,
    option: false,
    toolIcon: HomerowIcon,
    shift: true,
    tool,
    actionName: 'Homerow Scrolling',
  },
];
