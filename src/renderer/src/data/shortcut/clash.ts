import ClashIcon from '@renderer/assets/Clash.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Clash';
export const clashShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.X,
    control: true,
    command: false,
    option: true,
    toolIcon: ClashIcon,
    tool,
    actionName: 'Open Clash',
  },
];
