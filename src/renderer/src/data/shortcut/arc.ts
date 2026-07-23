import ArcIcon from '@renderer/assets/Arc.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const arcShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.A, 'control', 'command'],
    toolIcon: ArcIcon,
    tool: 'Arc',
    actionName: 'Search Spaces',
    iconColors: {
      primary: '#5772fd',
      secondary: '#3e5ae5',
    },
  },
];
