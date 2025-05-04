import PasteNowIcon from '@renderer/assets/PasteNow.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'PasteNow';
export const pasteNowShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.V,
    control: false,
    command: true,
    option: false,
    toolIcon: PasteNowIcon,
    shift: true,
    tool,
    actionName: 'Paste Clipboard',
  },
];
