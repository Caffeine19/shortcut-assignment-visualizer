import ArcIcon from '@renderer/assets/Arc.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const arcShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.A, 'control', 'option'],
    toolIcon: ArcIcon,
    tool: 'Arc',
    actionName: 'Search Spaces',
    iconColors: {
      primary: '#3756F5',
      secondary: '#002aff',
    },
  },
];
