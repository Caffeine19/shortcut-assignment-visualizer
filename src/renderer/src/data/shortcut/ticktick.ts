import TicktickIcon from '@renderer/assets/Ticktick.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Ticktick';
const ticktickColors = { primary: '#7496fb', secondary: '#92acfa' };

export const ticktickShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.A, 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Quick Add',
    iconColors: ticktickColors,
  },
  {
    keys: [KeyCode.P, 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Start/Abandon Promo',
    iconColors: ticktickColors,
  },
  {
    keys: [KeyCode.T, 'option'],
    toolIcon: TicktickIcon,
    tool,
    actionName: 'Search Tasks',
    raycastExtension: 'TickTick',
    iconColors: ticktickColors,
  },
];
