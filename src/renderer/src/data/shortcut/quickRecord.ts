import QuickRecordIcon from '@renderer/assets/QuickRecord.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'QuickRecord';
export const quickRecordShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.SEVEN,
    control: false,
    command: true,
    option: false,
    toolIcon: QuickRecordIcon,
    shift: true,
    tool,
    actionName: 'Start Recording',
  },
  {
    keyCode: KeyCode.EIGHT,
    control: false,
    command: true,
    option: false,
    toolIcon: QuickRecordIcon,
    shift: true,
    actionName: 'Stop Recording',
    tool,
  },
];
