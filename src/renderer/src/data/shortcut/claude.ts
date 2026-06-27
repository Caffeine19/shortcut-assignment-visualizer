import ClaudeIcon from '@renderer/assets/Claude.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const claudeShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.TWO, 'option'],
    toolIcon: ClaudeIcon,
    tool: 'Claude',
    actionName: 'Open Claude',
  },
];
