import GeminiIcon from '@renderer/assets/Gemini.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const geminiShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.EIGHT, 'control', 'option'],
    toolIcon: GeminiIcon,
    tool: 'Gemini',
    actionName: 'Open Gemini',
  },
];
