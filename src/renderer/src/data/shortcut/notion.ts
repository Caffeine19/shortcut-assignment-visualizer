import NotionIcon from '@renderer/assets/Notion.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Notion';
export const notionShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.N,
    control: true,
    command: false,
    option: true,
    toolIcon: NotionIcon,
    tool,
    actionName: 'Notion AI Shortcut',
  },
  {
    keyCode: KeyCode.N,
    control: true,
    command: false,
    option: true,
    toolIcon: NotionIcon,
    shift: true,
    tool,
    actionName: 'Open Notion',
  },
  {
    keyCode: KeyCode.N,
    control: true,
    command: true,
    option: false,
    toolIcon: NotionIcon,
    shift: false,
    tool: 'Raycast',
    actionName: 'Add Text to Page',
    raycastExtension: 'Notion',
  },
];
