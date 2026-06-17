import GhostIcon from '@renderer/assets/shortcuts/Ghost.png';
import ShortcutsIcon from '@renderer/assets/shortcuts/Space.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Shortcuts';
export const shortcutsShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.ONE, 'control', 'command'],
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy Main Screen By Hammerspoon',
  },
  {
    keys: [KeyCode.TWO, 'control', 'command'],
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy All Screens By Hammerspoon',
  },
  {
    keys: [KeyCode.THREE, 'control', 'command'],
    toolIcon: ShortcutsIcon,
    tool,
    actionName: 'Tidy All Spaces By Hammerspoon',
  },
  {
    keys: [KeyCode.FOUR, 'control', 'command'],
    toolIcon: GhostIcon,
    tool,
    actionName: 'Mess Up All Spaces',
  },
];
