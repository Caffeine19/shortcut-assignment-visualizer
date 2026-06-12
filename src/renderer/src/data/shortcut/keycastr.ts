import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const keycastrShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.K, 'control', 'option'],
    toolIcon: FinderColorfulIcon,
    tool: 'KeyCastr',
    actionName: 'Toggle KeyCastr',
  },
];
