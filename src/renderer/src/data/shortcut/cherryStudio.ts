import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const cherryStudioShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.THREE, 'option'],
    toolIcon: FinderColorfulIcon,
    tool: 'Cherry Studio',
    actionName: 'Open Cherry Studio',
  },
];
