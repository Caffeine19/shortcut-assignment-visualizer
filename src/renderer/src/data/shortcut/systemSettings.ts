import SystemSettingsIcon from '@renderer/assets/SystemSettings.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const systemSettingsShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.COMMA, 'option'],
    toolIcon: SystemSettingsIcon,
    tool: 'System Settings',
    actionName: 'App System Settings',
  },
];
