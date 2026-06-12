import FigmaIcon from '@renderer/assets/Figma.png';
import FinderColorfulIcon from '@renderer/assets/Finder.Colorful.png';
import GitlabIcon from '@renderer/assets/Gitlab.png';
import HammerspoonIcon from '@renderer/assets/Hammerspoon.png';
import JetbrainsIcon from '@renderer/assets/JetBrains.png';
import EdgeIcon from '@renderer/assets/MicrosoftEdge.png';
import RaycastIcon from '@renderer/assets/Raycast.png';
import SurgeIcon from '@renderer/assets/Surge.png';
import WarpIcon from '@renderer/assets/Warp.png';
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
import MirrorScreenIcon from '@renderer/assets/raycast/custom/MirrorScreen.png';
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
    keys: [KeyCode.M, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Mirror Screen',
    raycastExtension: 'Mirror Screen',
    raycastExtensionIcon: MirrorScreenIcon,
  },
  {
    keys: [KeyCode.Z, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search My Tasks',
    raycastExtension: 'Zentao',
    raycastExtensionIcon: ZentaoIcon,
  },
  {
    keys: [KeyCode.Z, 'control', 'option'],
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
    keys: [KeyCode.T, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'View 2FA Codes',
    raycastExtension: '2FA Code Finder',
    raycastExtensionIcon: FinderColorfulIcon,
  },
  {
    keys: [KeyCode.S, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Snippet',
    raycastExtension: 'Search Snippet',
    raycastExtensionIcon: FinderColorfulIcon,
  },
  {
    keys: [KeyCode.W, 'command', 'control'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Switch Window',
    raycastExtension: 'HammerWM',
    raycastExtensionIcon: FinderColorfulIcon,
  },
  {
    keys: [KeyCode.E, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'New Window',
    raycastExtension: 'Edge',
    raycastExtensionIcon: FinderColorfulIcon,
  },
  {
    keys: [KeyCode.M, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Inbox',
    raycastExtension: 'Spark',
    raycastExtensionIcon: FinderColorfulIcon,
  },
  {
    keys: [KeyCode.R, 'option'],
    toolIcon: FinderColorfulIcon,
    tool,
    actionName: 'Quick Note',
    raycastExtension: 'Notes',
  },
];

export const raycastShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.T, 'option'],
    toolIcon: RaycastIcon,
    raycastExtension: 'Toothpick',
    raycastExtensionIcon: ToothpickIcon,
    tool,
    actionName: 'Manage Bluetooth Connections',
  },
  {
    keys: [KeyCode.O, 'control', 'option'],
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
    keys: [KeyCode.SEMICOLON, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Emoji & Symbols',
    raycastExtension: 'Emoji & Symbols',
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
    keys: [KeyCode.PERIOD, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Shortcut Library',
    raycastExtension: 'Shortcut Library',
    raycastExtensionIcon: ShortcutLibraryIcon,
  },
  {
    keys: [KeyCode.M, 'command', 'control'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Menu Item',
    raycastExtension: 'Search Menu Items',
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
    keys: [KeyCode.O, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Set Output Device',
    raycastExtension: 'Set Audio Device',
    raycastExtensionIcon: SetAudioDeviceIcon,
  },
  {
    keys: [KeyCode.BACKSPACE, 'command', 'control'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Remove Window From Set',
    raycastExtension: 'Remove Window from Set',
    raycastExtensionIcon: RemoveWindowFromSetIcon,
  },
  {
    keys: [KeyCode.PERIOD, 'command', 'control'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Next Desktop',
    raycastExtension: 'Next Desktop',
  },
  {
    keys: [KeyCode.COMMA, 'command', 'control'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Previous Desktop',
    raycastExtension: 'Previous Desktop',
  },
  // {
  //   keys: [KeyCode.L, 'control', 'option'],
  //   toolIcon: RaycastIcon,
  //   tool,
  //   actionName: 'Open Launch Configuration',
  //   raycastExtension: 'Open Launch Configuration',
  // },
  {
    keys: [KeyCode.SLASH, 'command', 'control'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Toggle Stage Manager',
    raycastExtension: 'Toggle Stage Manager',
  },
  {
    keys: [KeyCode.D, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Insert Natural Language Date',
    raycastExtension: 'Date Format Converter',
    raycastExtensionIcon: DateFormatConverterIcon,
  },
  {
    keys: [KeyCode.SPACE, 'command', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Files',
    raycastExtension: 'Search Files',
  },
  {
    keys: [KeyCode.K, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Kill Process',
    raycastExtension: 'Kill Process',
    raycastExtensionIcon: KillProcessIcon,
  },
  {
    keys: [KeyCode.W, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Contacts and Chat',
    raycastExtension: 'WeChat',
    raycastExtensionIcon: WeChatIcon,
  },
  {
    keys: [KeyCode.X, 'option'],
    toolIcon: SurgeIcon,
    tool,
    actionName: 'Toggle Proxy',
    raycastExtension: 'Surge',
  },
  {
    keys: [KeyCode.X, 'control', 'option'],
    toolIcon: SurgeIcon,
    tool,
    actionName: 'Switch Proxy',
    raycastExtension: 'Surge',
  },
  {
    keys: [KeyCode.H, 'control', 'option'],
    toolIcon: HammerspoonIcon,
    tool,
    actionName: 'Reload Configuration File',
    raycastExtension: 'Hammerspoon',
  },
  {
    keys: [KeyCode.L, 'option'],
    toolIcon: WarpIcon,
    tool,
    actionName: 'Open Tab Config',
    raycastExtension: 'Warp',
  },
  {
    keys: [KeyCode.J, 'option'],
    toolIcon: JetbrainsIcon,
    tool,
    actionName: 'Search Recent Projects',
    raycastExtension: 'JetBrains Toolbox Recent Projects',
  },
  {
    keys: [KeyCode.G, 'option'],
    toolIcon: GitlabIcon,
    tool,
    actionName: 'Search Projects',
    raycastExtension: 'GitLab',
  },
  {
    keys: [KeyCode.F, 'option'],
    toolIcon: FigmaIcon,
    tool,
    actionName: 'Search Files',
    raycastExtension: 'Figma',
  },
  {
    keys: [KeyCode.E, 'option'],
    toolIcon: EdgeIcon,
    tool,
    actionName: 'Search Workspaces',
    raycastExtension: 'Microsoft Edge',
  },
  {
    keys: [KeyCode.C, 'control', 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Pick Color',
    raycastExtension: 'Color Picker',
    raycastExtensionIcon: ColorPickerIcon,
  },
  {
    keys: [KeyCode.B, 'option'],
    toolIcon: RaycastIcon,
    tool,
    actionName: 'Search Vault',
    raycastExtension: 'Bitwarden',
    raycastExtensionIcon: BitwardenIcon,
  },
  ...customExtensionShortcuts,
];
