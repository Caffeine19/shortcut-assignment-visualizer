import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const claudeShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.TWO, 'option'],
    toolIcon: FinderColorfulIcon,
    tool: 'Claude',
    actionName: 'Open Claude',
  },
];
