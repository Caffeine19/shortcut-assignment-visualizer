import WarpIcon from '@renderer/assets/Warp.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Warp';
export const warpShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.W,
    control: true,
    command: false,
    option: true,
    toolIcon: WarpIcon,
    tool,
    actionName: 'Open Warp Terminal',
  },
];
