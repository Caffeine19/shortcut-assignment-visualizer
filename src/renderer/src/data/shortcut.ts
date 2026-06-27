import { Shortcut } from '@renderer/types/shortcut';

import { altTabShortcutList } from './shortcut/altTab';
import { arcShortcutList } from './shortcut/arc';
import { builtInShortcutList } from './shortcut/builtIn';
import { chatGPTShortcutList } from './shortcut/chatgpt';
import { cherryStudioShortcutList } from './shortcut/cherryStudio';
import { claudeShortcutList } from './shortcut/claude';
import { homerowShortcutList } from './shortcut/homerow';
import { iceShortcutList } from './shortcut/ice';
import { keycastrShortcutList } from './shortcut/keycastr';
import { loopShortcutList } from './shortcut/loop';
import { notionShortcutList } from './shortcut/notion';
import { onepieceShortcutList } from './shortcut/onepiece';
import { passingThroughShortcutList } from './shortcut/passingThrough';
import { pasteNowShortcutList } from './shortcut/pasteNow';
import { quickRecordShortcutList } from './shortcut/quickRecord';
import { raycastShortcutList } from './shortcut/raycast';
import { shortcutsShortcutList } from './shortcut/shortcuts';
import { shottrShortcutList } from './shortcut/shottr';
import { snippetsLabShortcutList } from './shortcut/snippetsLab';
import { systemShortcutList } from './shortcut/system';
import { systemSettingsShortcutList } from './shortcut/systemSettings';
import { ticktickShortcutList } from './shortcut/ticktick';
import { vscodeShortcutList } from './shortcut/vscode';
import { warpShortcutList } from './shortcut/warp';

export const shortcutListData: Shortcut[] = [
  ...builtInShortcutList,
  ...pasteNowShortcutList,
  ...raycastShortcutList,
  ...shortcutsShortcutList,
  ...snippetsLabShortcutList,
  ...vscodeShortcutList,
  ...notionShortcutList,
  ...onepieceShortcutList,
  ...passingThroughShortcutList,
  ...shottrShortcutList,
  ...ticktickShortcutList,
  ...quickRecordShortcutList,
  ...homerowShortcutList,
  ...loopShortcutList,
  ...altTabShortcutList,
  ...arcShortcutList,
  ...iceShortcutList,
  ...chatGPTShortcutList,
  ...claudeShortcutList,
  ...cherryStudioShortcutList,
  ...systemShortcutList,
  ...systemSettingsShortcutList,
  ...keycastrShortcutList,
  ...warpShortcutList,
];
