import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const onepieceShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.S, 'control', 'command'],
    toolIcon: FinderColorfulIcon,
    tool: '1Piece',
    actionName: 'Switch Stage',
  },
  {
    keys: [KeyCode.ARROW_LEFT, 'control', 'command'],
    toolIcon: FinderColorfulIcon,
    tool: '1Piece',
    actionName: 'Focus Left Window',
  },
  {
    keys: [KeyCode.ARROW_RIGHT, 'control', 'command'],
    toolIcon: FinderColorfulIcon,
    tool: '1Piece',
    actionName: 'Focus Right Window',
  },
  {
    keys: [KeyCode.ARROW_UP, 'control', 'command'],
    toolIcon: FinderColorfulIcon,
    tool: '1Piece',
    actionName: 'Focus Top Window',
  },
  {
    keys: [KeyCode.ARROW_DOWN, 'control', 'command'],
    toolIcon: FinderColorfulIcon,
    tool: '1Piece',
    actionName: 'Focus Bottom Window',
  },
];
