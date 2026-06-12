import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const systemSettingsShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.COMMA, 'option'],
    toolIcon: FinderColorfulIcon,
    tool: 'System Settings',
    actionName: 'App System Settings',
  },
];
