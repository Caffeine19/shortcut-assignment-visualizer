import ClashIcon from '@renderer/assets/Clash.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Clash';
export const clashShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.X, 'control', 'option'],
    toolIcon: ClashIcon,
    tool,
    actionName: 'Open Clash',
  },
];
