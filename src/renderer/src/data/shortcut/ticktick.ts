import TicktickIcon from '@renderer/assets/Ticktick.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Ticktick';
export const ticktickShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.A, 'control', 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Quick Add',
  },
  {
    keys: [KeyCode.P, 'control', 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Start/Abandon Promo',
  },
];
