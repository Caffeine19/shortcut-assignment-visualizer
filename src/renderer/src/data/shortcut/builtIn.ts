import SystemSettingsIcon from '@renderer/assets/SystemSettings.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'System Built-in';
const builtIn = true;

export const builtInShortcutList: Shortcut[] = [
  // Command-Tab: Switch to the next most recently used app
  {
    keys: [KeyCode.TAB, 'command'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Switch Apps',
    builtIn,
  },
  // Command-Grave accent (`): Switch between windows of the current app
  {
    keys: [KeyCode.TILDE, 'command'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Switch Windows',
    builtIn,
  },
  // Control-Command-F: Use or stop using the app in full screen
  {
    keys: [KeyCode.F, 'command', 'control'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Toggle Full Screen',
    builtIn,
  },
  // Option-Command-Esc: Force quit an app
  {
    keys: [KeyCode.ESC, 'command', 'option'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Force Quit',
    builtIn,
  },
  // Command-Space bar: Show or hide Spotlight search field
  {
    keys: [KeyCode.SPACE, 'command'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Spotlight Search',
    builtIn,
  },
  // Control-Command-Space bar: Show the Character Viewer
  {
    keys: [KeyCode.SPACE, 'command', 'control'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Character Viewer',
    builtIn,
  },
  // Shift-Command-5: Take a screenshot or make a screen recording (macOS Mojave+)
  {
    keys: [KeyCode.FIVE, 'command', 'shift'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Screenshot & Recording',
    builtIn,
  },
  // Control-Command-Q: Lock your screen
  {
    keys: [KeyCode.Q, 'command', 'control'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Lock Screen',
    builtIn,
  },
  // Option-Command-D: Show or hide the Dock
  {
    keys: [KeyCode.D, 'command', 'option'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Toggle Dock',
    builtIn,
  },
  // Control-Shift-Command-T: Add selected Finder item to the Dock
  {
    keys: [KeyCode.T, 'command', 'control', 'shift'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Add to Dock',
    builtIn,
  },
  // Option-Command-P: Hide or show the path bar in Finder windows
  {
    keys: [KeyCode.P, 'command', 'option'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Toggle Path Bar',
    builtIn,
  },
  // Option-Command-S: Hide or show the Sidebar in Finder windows
  {
    keys: [KeyCode.S, 'command', 'option'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Toggle Sidebar',
    builtIn,
  },
  // Command-Slash (/): Hide or show the status bar in Finder windows
  {
    keys: [KeyCode.SLASH, 'command'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Toggle Status Bar',
    builtIn,
  },
  // Command-J: Show View Options in Finder
  {
    keys: [KeyCode.J, 'command'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'View Options',
    builtIn,
  },
  // Command-Shift-3: Take a screenshot of the entire screen
  {
    keys: [KeyCode.THREE, 'command', 'shift'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Screenshot Entire Screen',
    builtIn,
  },
  // Command-Shift-4: Take a screenshot of a selected area
  {
    keys: [KeyCode.FOUR, 'command', 'shift'],
    toolIcon: SystemSettingsIcon,
    tool,
    actionName: 'Screenshot Selected Area',
    builtIn,
  },
];
