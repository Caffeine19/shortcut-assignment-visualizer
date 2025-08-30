import ChatGPTIcon from '@renderer/assets/ChatGPT.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'ChatGPT';
export const chatGPTShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.SPACE,
    control:true,
    command:false,
    option: true,
    toolIcon: ChatGPTIcon,
    shift: false,
    tool,
    actionName: 'Chat bar',
  },
];
