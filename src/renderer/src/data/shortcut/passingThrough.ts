import PassingThroughIcon from '@renderer/assets/PassingThrough.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const passingThroughShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.TAB, 'control', 'command'],
    toolIcon: PassingThroughIcon,
    tool: 'Passing Through',
    actionName: 'Open Space Switcher',
  },
];
