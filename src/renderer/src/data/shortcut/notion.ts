import NotionIcon from '@renderer/assets/Notion.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Notion';
export const notionShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.N, 'control', 'option', 'shift'],
    toolIcon: NotionIcon,
    tool,
    actionName: 'Notion AI Shortcut',
  },
  {
    keys: [KeyCode.N, 'control', 'option'],
    toolIcon: NotionIcon,
    tool,
    actionName: 'Open Notion',
  },
  {
    keys: [KeyCode.N, 'command', 'control'],
    toolIcon: NotionIcon,
    tool: 'Raycast',
    actionName: 'Add Text to Page',
    raycastExtension: 'Notion',
  },
];
