import AltTabIcon from '@renderer/assets/AltTab.png';
import ClashIcon from '@renderer/assets/Clash.png';
import HomerowIcon from '@renderer/assets/Homerow.png';
import IceIcon from '@renderer/assets/Ice.png';
import LoopIcon from '@renderer/assets/Loop.png';
import NotionIcon from '@renderer/assets/Notion.png';
import PasteNowIcon from '@renderer/assets/PasteNow.png';
import PoeIcon from '@renderer/assets/Poe.png';
import QuickRecordIcon from '@renderer/assets/QuickRecord.png';
import RaycastIcon from '@renderer/assets/Raycast.png';
import ShottrIcon from '@renderer/assets/Shottr.png';
import SnippetsLabIcon from '@renderer/assets/SnippetsLab.png';
import TicktickIcon from '@renderer/assets/Ticktick.png';
import VSCodeIcon from '@renderer/assets/VSCode.png';
import WarpIcon from '@renderer/assets/Warp.png';

import { Shortcut } from '@renderer/types/shortcut';

const iceShortcutList = [
  {
    key: 'i',
    control: true,
    command: false,
    option: true,
    appIcon: IceIcon,
    tool: 'Ice',
    actionName: 'Enable the Ice Bar',
  },
  {
    key: 'i',
    shift: true,
    control: true,
    command: false,
    option: true,
    appIcon: IceIcon,
    tool: 'Ice',
    actionName: 'Search menu bar items',
  },
];

const altTabShortcutList = [
  {
    key: '~',
    control: false,
    command: false,
    option: true,
    appIcon: AltTabIcon,
    shift: false,
    tool: 'AltTab',
    actionName: 'Show windows from active app',
  },
  {
    key: 'space',
    control: false,
    command: false,
    option: true,
    appIcon: AltTabIcon,
    shift: false,
    tool: 'AltTab',
    actionName: 'Show windows from all Spaces',
  },
  {
    key: 'tab',
    control: false,
    command: false,
    option: true,
    appIcon: AltTabIcon,
    shift: false,
    tool: 'AltTab',
    actionName: 'Show windows from current Space',
  },
];

const shottrShortcutList = [
  {
    key: '1',
    control: false,
    command: true,
    option: false,
    appIcon: ShottrIcon,
    shift: true,
    tool: 'Shottr',
    actionName: 'Fullscreen Screenshot',
  },
  {
    key: '2',
    control: false,
    command: true,
    option: false,
    appIcon: ShottrIcon,
    shift: true,
    tool: 'Shottr',
    actionName: 'Area Screenshot',
  },
  {
    key: '3',
    control: false,
    command: true,
    option: false,
    appIcon: ShottrIcon,
    shift: true,
    tool: 'Shottr',
    actionName: 'Any Window Screenshot',
  },
  {
    key: '4',
    control: false,
    command: true,
    option: false,
    appIcon: ShottrIcon,
    shift: true,
    tool: 'Shottr',
    actionName: 'Scrolling Screenshot',
  },
  {
    key: '5',
    control: false,
    command: true,
    option: false,
    appIcon: ShottrIcon,
    shift: true,
    tool: 'Shottr',
    actionName: 'Instant Text/QR Recognition',
  },
];

const notionShortcutList = [
  {
    key: 'n',
    control: true,
    command: false,
    option: true,
    appIcon: NotionIcon,
    tool: 'Notion',
    actionName: 'Notion AI Shortcut',
  },
  {
    key: 'n',
    control: true,
    command: false,
    option: true,
    appIcon: NotionIcon,
    shift: true,
    tool: 'Notion',
    actionName: 'Open Notion',
  },
];

const ticktickShortcutList = [
  {
    key: 'a',
    control: true,
    command: false,
    option: true,
    appIcon: TicktickIcon,
    tool: 'Ticktick',
    actionName: 'Quick Add',
  },
  {
    key: 'p',
    control: true,
    command: false,
    option: true,
    appIcon: TicktickIcon,
    tool: 'Ticktick',
    actionName: 'Start/Abandon Promo',
  },
];

const quickRecorderShortcutList = [
  {
    key: 'r',
    control: false,
    command: true,
    option: false,
    appIcon: QuickRecordIcon,
    shift: true,
    tool: 'QuickRecord',
    actionName: 'Start Recording',
  },
  {
    key: 's',
    control: false,
    command: true,
    option: false,
    appIcon: QuickRecordIcon,
    shift: true,
    actionName: 'Stop Recording',
    tool: 'QuickRecord',
  },
];

const homerowShortcutList = [
  {
    key: 'space',
    control: false,
    command: true,
    option: false,
    appIcon: HomerowIcon,
    shift: true,
    tool: 'Homerow',
    actionName: 'Homerow Clicking',
  },
  {
    key: 'j',
    control: false,
    command: true,
    option: false,
    appIcon: HomerowIcon,
    shift: true,
    tool: 'Homerow',
    actionName: 'Homerow Scrolling',
  },
];

const loopShortcutList = [
  {
    key: 'h',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Move Left',
  },
  {
    key: 'j',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Move Down',
  },
  {
    key: 'k',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Move Up',
  },
  {
    key: 'l',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Move Right',
  },
  {
    key: 'space',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Cycle Windows',
  },
  {
    key: 'enter',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Center Window',
  },
  {
    key: '[',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Previous Desktop',
  },
  {
    key: ']',
    control: true,
    command: true,
    option: false,
    appIcon: LoopIcon,
    tool: 'Loop',
    actionName: 'Next Desktop',
  },
];

export const shortcutList: Shortcut[] = [
  {
    key: 's',
    control: true,
    command: false,
    option: true,
    appIcon: SnippetsLabIcon,
    tool: 'SnippetsLab',
    actionName: 'Toggle Assistant',
  },
  {
    key: 'l',
    control: true,
    command: false,
    option: true,
    appIcon: WarpIcon,
    tool: 'Warp',
    actionName: 'Open Warp Terminal',
  },
  {
    key: 'space',
    control: false,
    command: true,
    option: false,
    appIcon: RaycastIcon,
    tool: 'Raycast',
    actionName: 'Open Raycast',
  },
  {
    key: 'f',
    control: true,
    command: false,
    option: true,
    appIcon: RaycastIcon,
    tool: 'Raycast',
    actionName: 'Search Files',
  },
  {
    key: 'o',
    control: true,
    command: false,
    option: true,
    appIcon: RaycastIcon,
    tool: 'Raycast',
    actionName: 'Open Application',
  },
  {
    key: 'v',
    control: true,
    command: false,
    option: true,
    appIcon: VSCodeIcon,
    tool: 'VSCode',
    actionName: 'Paste in VSCode',
  },
  {
    key: 'e',
    control: true,
    command: false,
    option: true,
    appIcon: PoeIcon,
    tool: 'Poe',
    actionName: 'Open Poe',
  },
  {
    key: 'v',
    control: false,
    command: true,
    option: false,
    appIcon: PasteNowIcon,
    shift: true,
    tool: 'PasteNow',
    actionName: 'Paste Clipboard',
  },
  {
    key: 'c',
    control: true,
    command: false,
    option: true,
    appIcon: ClashIcon,
    tool: 'Clash',
    actionName: 'Open Clash',
  },
  ...notionShortcutList,
  ...shottrShortcutList,
  ...ticktickShortcutList,
  ...quickRecorderShortcutList,
  ...homerowShortcutList,
  ...loopShortcutList,
  ...altTabShortcutList,
  ...iceShortcutList,
];
