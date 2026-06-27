import OnePieceIcon from '@renderer/assets/OnePiece.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const onepieceShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.ARROW_LEFT, 'control', 'option'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Left Window',
  },
  {
    keys: [KeyCode.ARROW_RIGHT, 'control', 'option'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Right Window',
  },
  {
    keys: [KeyCode.ARROW_UP, 'control', 'option'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Top Window',
  },
  {
    keys: [KeyCode.ARROW_DOWN, 'control', 'option'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Bottom Window',
  },
  {
    keys: [KeyCode.ENTER, 'control', 'option'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus  Window Behind',
  },
];
