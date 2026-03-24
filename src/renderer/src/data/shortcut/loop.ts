import LoopIcon from '@renderer/assets/Loop.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Loop';
export const loopShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.H, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Left',
  },
  {
    keys: [KeyCode.J, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Down',
  },
  {
    keys: [KeyCode.K, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Up',
  },
  {
    keys: [KeyCode.L, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Right',
  },
  {
    keys: [KeyCode.SPACE, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Cycle Windows',
  },
  {
    keys: [KeyCode.ENTER, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Center Window',
  },
  {
    keys: [KeyCode.LEFT_BRACKET, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Previous Desktop',
  },
  {
    keys: [KeyCode.RIGHT_BRACKET, 'command', 'control'],
    toolIcon: LoopIcon,
    tool,
    actionName: 'Next Desktop',
  },
];
