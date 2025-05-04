import LoopIcon from '@renderer/assets/Loop.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Loop';
export const loopShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.H,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Left',
  },
  {
    keyCode: KeyCode.J,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Down',
  },
  {
    keyCode: KeyCode.K,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Up',
  },
  {
    keyCode: KeyCode.L,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Move Right',
  },
  {
    keyCode: KeyCode.SPACE,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Cycle Windows',
  },
  {
    keyCode: KeyCode.ENTER,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Center Window',
  },
  {
    keyCode: KeyCode.LEFT_BRACKET,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Previous Desktop',
  },
  {
    keyCode: KeyCode.RIGHT_BRACKET,
    control: true,
    command: true,
    option: false,
    toolIcon: LoopIcon,
    tool,
    actionName: 'Next Desktop',
  },
];
