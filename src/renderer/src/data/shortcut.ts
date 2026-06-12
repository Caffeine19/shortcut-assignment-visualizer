import { Shortcut } from '@renderer/types/shortcut';

import { altTabShortcutList } from './shortcut/altTab';
import { builtInShortcutList } from './shortcut/builtIn';
import { chatGPTShortcutList } from './shortcut/chatgpt';
import { homerowShortcutList } from './shortcut/homerow';
import { iceShortcutList } from './shortcut/ice';
import { keycastrShortcutList } from './shortcut/keycastr';
import { loopShortcutList } from './shortcut/loop';
import { notionShortcutList } from './shortcut/notion';
import { pasteNowShortcutList } from './shortcut/pasteNow';
import { quickRecordShortcutList } from './shortcut/quickRecord';
import { raycastShortcutList } from './shortcut/raycast';
import { shortcutsShortcutList } from './shortcut/shortcuts';
import { shottrShortcutList } from './shortcut/shottr';
import { snippetsLabShortcutList } from './shortcut/snippetsLab';
import { systemShortcutList } from './shortcut/system';
import { ticktickShortcutList } from './shortcut/ticktick';
import { vscodeShortcutList } from './shortcut/vscode';
import { systemSettingsShortcutList } from './shortcut/systemSettings';
import { warpShortcutList } from './shortcut/warp';

export const shortcutListData: Shortcut[] = [
  ...builtInShortcutList,
  ...pasteNowShortcutList,
  ...raycastShortcutList,
  ...shortcutsShortcutList,
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
  ...systemSettingsShortcutList,
  ...keycastrShortcutList,
  ...warpShortcutList,
];
