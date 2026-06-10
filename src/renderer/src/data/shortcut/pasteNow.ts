import PasteNowIcon from '@renderer/assets/PasteNow.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'PasteNow';
export const pasteNowShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.V, 'option'],
    toolIcon: PasteNowIcon,
    tool,
    actionName: 'Paste Clipboard',
  },
];
