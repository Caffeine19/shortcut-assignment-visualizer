import RaycastIcon from '@renderer/assets/Raycast.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Raycast';
export const raycastShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.SPACE,
    control: false,
    command: true,
    option: false,
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Open Raycast',
  },
  {
    keyCode: KeyCode.F,
    control: true,
    command: false,
    option: true,
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Files',
  },
  {
    keyCode: KeyCode.O,
    control: true,
    command: false,
    option: true,
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Open Application',
  },
];
