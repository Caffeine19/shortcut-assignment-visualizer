import QuickRecordIcon from '@renderer/assets/QuickRecord.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'QuickRecord';
export const quickRecordShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.SEVEN, 'shift', 'command'],
    toolIcon: QuickRecordIcon,
    tool,
    actionName: 'Start Recording',
  },
  {
    keys: [KeyCode.EIGHT, 'shift', 'command'],
    toolIcon: QuickRecordIcon,
    tool,
    actionName: 'Stop Recording',
  },
];
