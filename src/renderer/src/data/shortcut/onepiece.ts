import OnePieceIcon from '@renderer/assets/OnePiece.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const onepieceShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.H, 'control', 'shift', 'command'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Left Window',
  },
  {
    keys: [KeyCode.L, 'control', 'shift', 'command'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Right Window',
  },
  {
    keys: [KeyCode.K, 'control', 'shift', 'command'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Top Window',
  },
  {
    keys: [KeyCode.J, 'control', 'shift', 'command'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Bottom Window',
  },
  {
    keys: [KeyCode.ENTER, 'control', 'shift', 'command'],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus  Window Behind',
  },
];
