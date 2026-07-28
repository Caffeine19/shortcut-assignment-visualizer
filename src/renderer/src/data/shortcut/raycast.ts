import FigmaIcon from '@renderer/assets/Figma.png';
import GitReposIcon from '@renderer/assets/GitRepos.png';
import GitlabIcon from '@renderer/assets/Gitlab.png';
import GitmojiIcon from '@renderer/assets/Gitmoji.png';
import HammerWMIcon from '@renderer/assets/HammerWM.png';
import HammerspoonIcon from '@renderer/assets/Hammerspoon.png';
import JetbrainsIcon from '@renderer/assets/JetBrains.png';
import EdgeIcon from '@renderer/assets/MicrosoftEdge.png';
import RaycastIcon from '@renderer/assets/Raycast.png';
import SurgeIcon from '@renderer/assets/Surge.png';
import WarpIcon from '@renderer/assets/Warp.png';
import iMessageIcon from '@renderer/assets/iMessage.png';
import BitwardenIcon from '@renderer/assets/raycast/Bitwarden.png';
import ColorPickerIcon from '@renderer/assets/raycast/ColorPicker.png';
import DateFormatConverterIcon from '@renderer/assets/raycast/DateFormatConverter.png';
import KillProcessIcon from '@renderer/assets/raycast/KillProcess.png';
import OpenWithIcon from '@renderer/assets/raycast/OpenWith.png';
import RemoveWindowFromSetIcon from '@renderer/assets/raycast/RemoveWindowFromSet.png';
import SetAudioDeviceIcon from '@renderer/assets/raycast/SetAudioDevice.png';
import ShortcutLibraryIcon from '@renderer/assets/raycast/ShortcutLibrary.png';
import ToggleKeyboardBrightnessIcon from '@renderer/assets/raycast/ToggleKeyboardBrightness.png';
import ToothpickIcon from '@renderer/assets/raycast/Toothpick.png';
import WeChatIcon from '@renderer/assets/raycast/WeChat.png';
import CopilotIcon from '@renderer/assets/raycast/custom/Copilot.png';
import MirrorScreenIcon from '@renderer/assets/raycast/custom/MirrorScreen.png';
import ObsidianIcon from '@renderer/assets/raycast/custom/Obsidian.png';
import RestartWithoutReopenIcon from '@renderer/assets/raycast/custom/RestartWithoutReopen.png';
import ZentaoIcon from '@renderer/assets/raycast/custom/Zentao.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

/**
 * RaycastExtensionIcon or ToolIcon?
 *
 * ToolIcon has padding. RaycastExtensionIcon's padding is complex - sometimes it has padding,
 * sometimes not, and size varies. So if the icon is from a Raycast extension, open Figma, remove
 * the padding there, and export it again.
 */

const tool = 'Raycast';

export const customExtensionShortcuts: Shortcut[] = [
  {
    keys: [KeyCode.M, 'control', 'shift', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Mirror Screen',
    raycastExtension: 'Mirror Screen',
    raycastExtensionIcon: MirrorScreenIcon,
  },
  {
    keys: [KeyCode.Z, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search My Tasks',
    raycastExtension: 'Zentao',
    raycastExtensionIcon: ZentaoIcon,
  },
  {
    keys: [KeyCode.Z, 'control', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search My Bugs',
    raycastExtension: 'Zentao',
    raycastExtensionIcon: ZentaoIcon,
  },
  {
    keys: [KeyCode.Q, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Restart Without Reopen',
    raycastExtension: 'Restart Without Reopen',
    raycastExtensionIcon: RestartWithoutReopenIcon,
  },
  {
    keys: [KeyCode.W, 'control', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Switch Window',
    raycastExtension: 'HammerWM',
    raycastExtensionIcon: HammerWMIcon,
  },
  {
    keys: [KeyCode.S, 'control', 'shift', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'List Chat Sessions',
    raycastExtension: 'Copilot',
    raycastExtensionIcon: CopilotIcon,
  },
  {
    keys: [KeyCode.O, 'control', 'shift', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Note',
    raycastExtension: 'Obsidian',
    raycastExtensionIcon: ObsidianIcon,
  },
  {
    keys: [KeyCode.E, 'control', 'command'],
    toolIcon: EdgeIcon,
    tool,
    actionName: 'New Window',
    raycastExtension: 'Edge',
  },
  {
    keys: [KeyCode.E, 'control', 'option'],
    toolIcon: EdgeIcon,
    tool,
    actionName: 'Search Workspaces',
    raycastExtension: 'Microsoft Edge',
  },
];

export const buildInExtensionShortcuts: Shortcut[] = (
  [
    {
      keys: [KeyCode.N, 'control', 'option'],
      tool,
      actionName: 'Raycast Notes',
      raycastExtension: 'Notes',
    },
    {
      keys: [KeyCode.M, 'control', 'command'],
      tool,
      actionName: 'Search Menu Item',
      raycastExtension: 'Search Menu Items',
    },
    {
      keys: [KeyCode.SLASH, 'control', 'command'],
      tool,
      actionName: 'Toggle Stage Manager',
      raycastExtension: 'Toggle Stage Manager',
    },
    {
      keys: [KeyCode.QUOTE, 'control', 'option'],
      tool,
      actionName: 'Search Emoji & Symbols',
      raycastExtension: 'Emoji & Symbols',
    },
    {
      keys: [KeyCode.S, 'control', 'command'],
      tool,
      actionName: 'Search Snippet',
      raycastExtension: 'Search Snippet',
    },
    {
      keys: [KeyCode.PERIOD, 'control', 'command'],
      tool,
      actionName: 'Next Desktop',
      raycastExtension: 'Next Desktop',
    },
    {
      keys: [KeyCode.COMMA, 'control', 'command'],
      tool,
      actionName: 'Previous Desktop',
      raycastExtension: 'Previous Desktop',
    },
  ] satisfies Omit<Shortcut, 'toolIcon'>[]
).map((shortcut) => ({
  ...shortcut,
  toolIcon: RaycastIcon,
}));

export const raycastShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.T, 'control', 'command'],
    toolIcon: RaycastIcon,
    raycastExtension: 'Toothpick',
    raycastExtensionIcon: ToothpickIcon,
    tool,
    actionName: 'Manage Bluetooth Connections',
  },
  {
    keys: [KeyCode.O, 'control', 'command'],
    toolIcon: RaycastIcon,
    raycastExtension: 'Open With',
    raycastExtensionIcon: OpenWithIcon,
    tool,
    actionName: 'Open Raycast',
  },
  {
    keys: [KeyCode.SPACE, 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Open Raycast',
  },
  {
    keys: [KeyCode.SEMICOLON, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Gitmoji',
    raycastExtension: 'Gitmoji',
    raycastExtensionIcon: GitmojiIcon,
  },
  {
    keys: [KeyCode.B, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Toggle Keyboard Brightness',
    raycastExtension: 'Toggle Keyboard Brightness',
    raycastExtensionIcon: ToggleKeyboardBrightnessIcon,
  },
  {
    keys: [KeyCode.PERIOD, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Shortcut Library',
    raycastExtension: 'Shortcut Library',
    raycastExtensionIcon: ShortcutLibraryIcon,
  },
  // defined in VSCode
  //   {
  //     keys: [KeyCode.V, 'control', 'option'],
  //     toolIcon: RaycastIcon,
  //     tool,
  //     actionName: 'Search Recent Projects',
  //     raycastExtension: 'Search Recent Projects',
  //   },
  {
    keys: [KeyCode.O, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Set Output Device',
    raycastExtension: 'Set Audio Device',
    raycastExtensionIcon: SetAudioDeviceIcon,
  },
  {
    keys: [KeyCode.I, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Set Input Device',
    raycastExtension: 'Set Audio Device',
    raycastExtensionIcon: SetAudioDeviceIcon,
  },
  {
    keys: [KeyCode.BACKSPACE, 'control', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Remove Window From Set',
    raycastExtension: 'Remove Window from Set',
    raycastExtensionIcon: RemoveWindowFromSetIcon,
  },
  // {
  //   keys: [KeyCode.L, 'control', 'option'],
  //   toolIcon: RaycastIcon,
  //   tool,
  //   actionName: 'Open Launch Configuration',
  //   raycastExtension: 'Open Launch Configuration',
  // },
  {
    keys: [KeyCode.D, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Insert Natural Language Date',
    raycastExtension: 'Date Format Converter',
    raycastExtensionIcon: DateFormatConverterIcon,
  },
  {
    keys: [KeyCode.SPACE, 'option', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Files',
    raycastExtension: 'Search Files',
  },
  {
    keys: [KeyCode.K, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Kill Process',
    raycastExtension: 'Kill Process',
    raycastExtensionIcon: KillProcessIcon,
  },
  {
    keys: [KeyCode.W, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Contacts and Chat',
    raycastExtension: 'WeChat',
    raycastExtensionIcon: WeChatIcon,
  },
  {
    keys: [KeyCode.X, 'control', 'option'],
    toolIcon: SurgeIcon,
    tool,
    actionName: 'Toggle Proxy',
    raycastExtension: 'Surge',
  },
  {
    keys: [KeyCode.X, 'control', 'command'],
    toolIcon: SurgeIcon,
    tool,
    actionName: 'Switch Proxy',
    raycastExtension: 'Surge',
  },
  {
    keys: [KeyCode.R, 'control', 'option'],
    toolIcon: HammerspoonIcon,
    tool,
    actionName: 'Reload Configuration File',
    raycastExtension: 'Hammerspoon',
  },
  {
    keys: [KeyCode.L, 'control', 'option'],
    toolIcon: WarpIcon,
    tool,
    actionName: 'Open Tab Config',
    raycastExtension: 'Warp',
  },
  {
    keys: [KeyCode.J, 'control', 'option'],
    toolIcon: JetbrainsIcon,
    tool,
    actionName: 'Search Recent Projects',
    raycastExtension: 'JetBrains Toolbox Recent Projects',
  },
  {
    keys: [KeyCode.G, 'control', 'command'],
    toolIcon: GitlabIcon,
    tool,
    actionName: 'Search Projects',
    raycastExtension: 'GitLab',
  },
  {
    keys: [KeyCode.G, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'List Repos',
    raycastExtension: 'Git Repos',
    raycastExtensionIcon: GitReposIcon,
  },
  {
    keys: [KeyCode.F, 'control', 'option'],
    toolIcon: FigmaIcon,
    tool,
    actionName: 'Search Files',
    raycastExtension: 'Figma',
  },
  {
    keys: [KeyCode.C, 'control', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Pick Color',
    raycastExtension: 'Color Picker',
    raycastExtensionIcon: ColorPickerIcon,
  },
  {
    keys: [KeyCode.B, 'control', 'command'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Vault',
    raycastExtension: 'Bitwarden',
    raycastExtensionIcon: BitwardenIcon,
  },
  {
    keys: [KeyCode.M, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'View 2FA Codes',
    raycastExtension: '2FA Code Finder',
    raycastExtensionIcon: iMessageIcon,
  },
  {
    keys: [KeyCode.H, 'control', 'option'],
    toolIcon: HammerspoonIcon,
    tool,
    actionName: 'List Scripts',
    raycastExtension: 'Hammerspoon',
  },
  ...customExtensionShortcuts,
  ...buildInExtensionShortcuts,
];
