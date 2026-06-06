import TicktickIcon from '@renderer/assets/Ticktick.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Ticktick';
const ticktickColors = { primary: '#4672FB', secondary: '#92acfa' };

export const ticktickShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.A, 'control', 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Quick Add',
    iconColors: ticktickColors,
  },
  {
    keys: [KeyCode.P, 'control', 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Start/Abandon Promo',
    iconColors: ticktickColors,
  },
];
