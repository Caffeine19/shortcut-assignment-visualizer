import AltTabIcon from '@renderer/assets/AltTab.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'AltTab';
export const altTabShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.TILDE, 'option'],
    toolIcon: AltTabIcon,
    tool,
    actionName: 'Show windows from active app',
  },
  {
    keys: [KeyCode.SPACE, 'option'],
    toolIcon: AltTabIcon,
    tool,
    actionName: 'Show windows from all Spaces',
  },
  {
    keys: [KeyCode.TAB, 'option'],
    toolIcon: AltTabIcon,
    tool,
    actionName: 'Show windows from current Space',
  },
];
