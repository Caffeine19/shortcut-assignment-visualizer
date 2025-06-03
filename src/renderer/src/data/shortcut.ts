import { Shortcut } from '@renderer/types/shortcut';

import { altTabShortcutList } from './shortcut/altTab';
import { chatGPTShortcutList } from './shortcut/chatgpt';
import { clashShortcutList } from './shortcut/clash';
import { homerowShortcutList } from './shortcut/homerow';
import { iceShortcutList } from './shortcut/ice';
import { loopShortcutList } from './shortcut/loop';
import { notionShortcutList } from './shortcut/notion';
import { pasteNowShortcutList } from './shortcut/pasteNow';
import { poeShortcutList } from './shortcut/poe';
import { quickRecordShortcutList } from './shortcut/quickRecord';
import { raycastShortcutList } from './shortcut/raycast';
import { shottrShortcutList } from './shortcut/shottr';
import { snippetsLabShortcutList } from './shortcut/snippetsLab';
import { ticktickShortcutList } from './shortcut/ticktick';
import { vscodeShortcutList } from './shortcut/vscode';
import { warpShortcutList } from './shortcut/warp';

export const shortcutListData: Shortcut[] = [
  ...clashShortcutList,
  ...pasteNowShortcutList,
  ...poeShortcutList,
  ...raycastShortcutList,
  ...snippetsLabShortcutList,
  ...vscodeShortcutList,
  ...warpShortcutList,
  ...notionShortcutList,
  ...shottrShortcutList,
  ...ticktickShortcutList,
  ...quickRecordShortcutList,
  ...homerowShortcutList,
  ...loopShortcutList,
  ...altTabShortcutList,
  ...iceShortcutList,
  ...chatGPTShortcutList,
];
