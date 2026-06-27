import LoopIcon from '@renderer/assets/Loop.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Loop';
export const loopShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.H, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Left',
  },
  {
    keys: [KeyCode.J, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Down',
  },
  {
    keys: [KeyCode.K, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Up',
  },
  {
    keys: [KeyCode.L, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Right',
  },
  {
    keys: [KeyCode.SPACE, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Cycle Windows',
  },
  {
    keys: [KeyCode.ENTER, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Center Window',
  },
  {
    keys: [KeyCode.LEFT_BRACKET, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Previous Desktop',
  },
  {
    keys: [KeyCode.RIGHT_BRACKET, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Next Desktop',
  },
  {
    keys: [KeyCode.R, 'control', 'command'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Reasonable',
  },
];
