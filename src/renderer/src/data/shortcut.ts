import { Shortcut } from '@renderer/types/shortcut';

import { altTabShortcutList } from './shortcut/altTab';
import { chatGPTShortcutList } from './shortcut/chatgpt';
import { homerowShortcutList } from './shortcut/homerow';
import { iceShortcutList } from './shortcut/ice';
import { loopShortcutList } from './shortcut/loop';
import { notionShortcutList } from './shortcut/notion';
import { pasteNowShortcutList } from './shortcut/pasteNow';
import { quickRecordShortcutList } from './shortcut/quickRecord';
import { raycastShortcutList } from './shortcut/raycast';
import { shottrShortcutList } from './shortcut/shottr';
import { snippetsLabShortcutList } from './shortcut/snippetsLab';
import { systemShortcutList } from './shortcut/system';
import { ticktickShortcutList } from './shortcut/ticktick';
import { vscodeShortcutList } from './shortcut/vscode';
import { warpShortcutList } from './shortcut/warp';

export const shortcutListData: Shortcut[] = [
  ...pasteNowShortcutList,
  ...raycastShortcutList,
  ...snippetsLabShortcutList,
  ...vscodeShortcutList,
  ...notionShortcutList,
  ...shottrShortcutList,
  ...ticktickShortcutList,
  ...quickRecordShortcutList,
  ...homerowShortcutList,
  ...loopShortcutList,
  ...altTabShortcutList,
  ...iceShortcutList,
  ...chatGPTShortcutList,
  ...systemShortcutList,
  ...warpShortcutList,
];
