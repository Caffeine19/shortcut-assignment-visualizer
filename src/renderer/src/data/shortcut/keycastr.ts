import KeyCastrIcon from '@renderer/assets/KeyCastr.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const keycastrShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.K, 'control', 'option'],
    toolIcon: KeyCastrIcon,
    tool: 'KeyCastr',
    actionName: 'Toggle KeyCastr',
  },
];
