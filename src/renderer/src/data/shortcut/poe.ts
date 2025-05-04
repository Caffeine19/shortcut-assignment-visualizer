import PoeIcon from '@renderer/assets/Poe.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Poe';
export const poeShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.E,
    control: true,
    command: false,
    option: true,
    toolIcon: PoeIcon,
    tool,
    actionName: 'Open Poe',
  },
];
