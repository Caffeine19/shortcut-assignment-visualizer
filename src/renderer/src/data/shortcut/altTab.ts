import AltTabIcon from '@renderer/assets/AltTab.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'AltTab';
export const altTabShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.TILDE,
    control: false,
    command: false,
    option: true,
    toolIcon: AltTabIcon,
    shift: false,
    tool,
    actionName: 'Show windows from active app',
  },
  {
    keyCode: KeyCode.SPACE,
    control: false,
    command: false,
    option: true,
    toolIcon: AltTabIcon,
    shift: false,
    tool,
    actionName: 'Show windows from all Spaces',
  },
  {
    keyCode: KeyCode.TAB,
    control: false,
    command: false,
    option: true,
    toolIcon: AltTabIcon,
    shift: false,
    tool,
    actionName: 'Show windows from current Space',
  },
];
