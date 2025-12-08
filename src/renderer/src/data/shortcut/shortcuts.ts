import GhostIcon from '@renderer/assets/shortcuts/Ghost.png';
import ShortcutsIcon from '@renderer/assets/shortcuts/Space.png';
import WindIcon from '@renderer/assets/shortcuts/Wind.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Shortcuts';
export const shortcutsShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.ONE,
    control: true,
    command: true,
    option: false,
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy Main Screen By Hammerspoon',
  },
  {
    keyCode: KeyCode.TWO,
    control: true,
    command: true,
    option: false,
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy All Screens By Hammerspoon',
  },
  {
    keyCode: KeyCode.THREE,
    control: true,
    command: true,
    option: false,
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy All Spaces By Hammerspoon',
  },
  {
    keyCode: KeyCode.FOUR,
    control: true,
    command: true,
    option: false,
    toolIcon: GhostIcon,
    tool,
    actionName: 'Mess Up All Spaces',
  },
  {
    keyCode: KeyCode.C,
    control: true,
    command: false,
    option: true,
    toolIcon: WindIcon,
    tool,
    actionName: 'Clear Notifications',
  },
];
