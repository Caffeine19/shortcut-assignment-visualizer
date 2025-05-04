import SnippetsLabIcon from '@renderer/assets/SnippetsLab.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'SnippetsLab';
export const snippetsLabShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.S,
    control: true,
    command: false,
    option: true,
    toolIcon: SnippetsLabIcon,
    tool,
    actionName: 'Toggle Assistant',
  },
];
