import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const passingThroughShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.TAB, 'control', 'command'],
    toolIcon: FinderColorfulIcon,
    tool: 'Passing Through',
    actionName: 'Open Space Switcher',
  },
];
