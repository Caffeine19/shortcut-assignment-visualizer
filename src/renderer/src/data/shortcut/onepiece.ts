import OnePieceIcon from '@renderer/assets/OnePiece.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

export const onepieceShortcutList: Shortcut[] = [
  {
    keys: [[KeyCode.H, 'control', 'option', 'command']],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Left Window',
  },
  {
    keys: [[KeyCode.L, 'control', 'option', 'command']],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Right Window',
  },
  {
    keys: [[KeyCode.K, 'control', 'option', 'command']],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Top Window',
  },
  {
    keys: [[KeyCode.J, 'control', 'option', 'command']],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus Bottom Window',
  },
  {
    keys: [[KeyCode.ENTER, 'control', 'option', 'command']],
    toolIcon: OnePieceIcon,
    tool: '1Piece',
    actionName: 'Focus  Window Behind',
  },
];
