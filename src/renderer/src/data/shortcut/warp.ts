import WarpIcon from '@renderer/assets/Warp.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const warpShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.TILDE, 'option'],
    toolIcon: WarpIcon,
    tool: 'Warp',
    actionName: 'Warp Global Hotkey',
  },
];
