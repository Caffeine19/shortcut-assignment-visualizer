import WarpIcon from '@renderer/assets/Warp.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Raycast';
export const warpShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.L,
    control: true,
    command: false,
    option: true,
    toolIcon: WarpIcon,
    tool,
    actionName: 'Open Warp Terminal',
    raycastExtension: 'Warp',
  },
];
