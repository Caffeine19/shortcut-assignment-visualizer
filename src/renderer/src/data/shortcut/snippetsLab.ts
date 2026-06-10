import SnippetsLabIcon from '@renderer/assets/SnippetsLab.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'SnippetsLab';
export const snippetsLabShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.S, 'option'],
    toolIcon: SnippetsLabIcon,
    tool,
    actionName: 'Toggle Assistant',
  },
];
