import FinderPaleIcon from '@renderer/assets/Finder.Pale.svg';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'System Built-in';
const builtIn = true;

export const builtInShortcutList: Shortcut[] = [
  // Command-Tab: Switch to the next most recently used app
  {
    keys: [KeyCode.TAB, 'command'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch Apps',
    builtIn,
  },
  // Command-Grave accent (`): Switch between windows of the current app
  {
    keys: [KeyCode.TILDE, 'command'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch Windows',
    builtIn,
  },
  // Command-Control-F: Use or stop using the app in full screen
  {
    keys: [KeyCode.F, 'command', 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Toggle Full Screen',
    builtIn,
  },
  // Command-Option-Esc: Force quit an app
  {
    keys: [KeyCode.ESC, 'command', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Force Quit',
    builtIn,
  },
  // Command-Space bar: Show or hide Spotlight search field
  {
    keys: [KeyCode.SPACE, 'command'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Spotlight Search',
    builtIn,
  },
  // Command-Control-Space bar: Show the Character Viewer
  {
    keys: [KeyCode.SPACE, 'command', 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Character Viewer',
    builtIn,
  },
  // Command-Control-Q: Lock your screen
  {
    keys: [KeyCode.Q, 'command', 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Lock Screen',
    builtIn,
  },
  // Command-Option-D: Show or hide the Dock
  {
    keys: [KeyCode.D, 'command', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Toggle Dock',
    builtIn,
  },

  // Command-Shift-3: Take a screenshot of the entire screen
  {
    keys: [KeyCode.THREE, 'command', 'shift'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Screenshot Entire Screen',
    builtIn,
  },
  // Command-Shift-4: Take a screenshot of a selected area
  {
    keys: [KeyCode.FOUR, 'command', 'shift'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Screenshot Selected Area',
    builtIn,
  },
  // Command-Shift-5: Take a screenshot or make a screen recording (macOS Mojave+)
  {
    keys: [KeyCode.FIVE, 'command', 'shift'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Screenshot & Recording',
    builtIn,
  },
  // Command-Shift-6: Capture the Touch Bar
  {
    keys: [KeyCode.SIX, 'command', 'shift'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Capture Touch Bar',
    builtIn,
  },

  // ── Mission Control ──────────────────────────────────────────────────
  // Control-Up Arrow: Open Mission Control
  {
    keys: [KeyCode.ARROW_UP, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Mission Control',
    builtIn,
  },
  // Control-Down Arrow: App Exposé (show windows of current app)
  {
    keys: [KeyCode.ARROW_DOWN, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'App Exposé',
    builtIn,
  },
  // Control-Left Arrow: Move left a space
  {
    keys: [KeyCode.ARROW_LEFT, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Move Left a Space',
    builtIn,
  },
  // Control-Right Arrow: Move right a space
  {
    keys: [KeyCode.ARROW_RIGHT, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Move Right a Space',
    builtIn,
  },

  // ── Switch to Desktop N (⌃+1 ~ ⌃+0) ────────────────────────────────
  {
    keys: [KeyCode.ONE, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 1',
    builtIn,
  },
  {
    keys: [KeyCode.TWO, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 2',
    builtIn,
  },
  {
    keys: [KeyCode.THREE, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 3',
    builtIn,
  },
  {
    keys: [KeyCode.FOUR, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 4',
    builtIn,
  },
  {
    keys: [KeyCode.FIVE, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 5',
    builtIn,
  },
  {
    keys: [KeyCode.SIX, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 6',
    builtIn,
  },
  {
    keys: [KeyCode.SEVEN, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 7',
    builtIn,
  },
  {
    keys: [KeyCode.EIGHT, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 8',
    builtIn,
  },
  {
    keys: [KeyCode.NINE, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 9',
    builtIn,
  },
  {
    keys: [KeyCode.ZERO, 'control'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 10',
    builtIn,
  },

  // ── Switch to Desktop 11-16 (⌃⌥+1 ~ ⌃⌥+6) ─────────────────────────
  {
    keys: [KeyCode.ONE, 'control', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 11',
    builtIn,
  },
  {
    keys: [KeyCode.TWO, 'control', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 12',
    builtIn,
  },
  {
    keys: [KeyCode.THREE, 'control', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 13',
    builtIn,
  },
  {
    keys: [KeyCode.FOUR, 'control', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 14',
    builtIn,
  },
  {
    keys: [KeyCode.FIVE, 'control', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 15',
    builtIn,
  },
  {
    keys: [KeyCode.SIX, 'control', 'option'],
    toolIcon: FinderPaleIcon,
    tool,
    actionName: 'Switch to Desktop 16',
    builtIn,
  },
];
