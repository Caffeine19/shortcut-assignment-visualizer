import GhostIcon from '@renderer/assets/shortcuts/Ghost.png';
import ShortcutsIcon from '@renderer/assets/shortcuts/Space.png';
import WindIcon from '@renderer/assets/shortcuts/Wind.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Shortcuts';
export const shortcutsShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.ONE, 'command', 'control'],
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy Main Screen By Hammerspoon',
  },
  {
    keys: [KeyCode.TWO, 'command', 'control'],
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy All Screens By Hammerspoon',
  },
  {
    keys: [KeyCode.THREE, 'command', 'control'],
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy All Spaces By Hammerspoon',
  },
  {
    keys: [KeyCode.FOUR, 'command', 'control'],
    toolIcon: GhostIcon,
    tool,
    actionName: 'Mess Up All Spaces',
  },
  {
    keys: [KeyCode.C, 'command', 'control'],
    toolIcon: WindIcon,
    tool,
    actionName: 'Clear Notifications',
  },
];
