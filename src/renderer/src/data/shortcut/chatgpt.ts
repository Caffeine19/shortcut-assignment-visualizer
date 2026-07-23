import ChatGPTIcon from '@renderer/assets/ChatGPT.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'ChatGPT';
export const chatGPTShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.SEVEN, 'control', 'option'],
    toolIcon: ChatGPTIcon,
    tool,
    actionName: 'Chat bar',
  },
];
