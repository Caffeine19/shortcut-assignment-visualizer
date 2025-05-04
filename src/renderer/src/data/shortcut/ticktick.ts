import TicktickIcon from '@renderer/assets/Ticktick.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Ticktick';
export const ticktickShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.A,
    control: true,
    command: false,
    option: true,
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Quick Add',
  },
  {
    keyCode: KeyCode.P,
    control: true,
    command: false,
    option: true,
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Start/Abandon Promo',
  },
];
