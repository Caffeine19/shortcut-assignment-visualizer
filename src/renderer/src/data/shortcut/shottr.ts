import ShottrIcon from '@renderer/assets/Shottr.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Shottr';
export const shottrShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.ONE, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Fullscreen Screenshot',
  },
  {
    keys: [KeyCode.TWO, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Area Screenshot',
  },
  {
    keys: [KeyCode.THREE, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Any Window Screenshot',
  },
  {
    keys: [KeyCode.FOUR, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Scrolling Screenshot',
  },
  {
    keys: [KeyCode.FIVE, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Instant Text/QR Recognition',
  },
  {
    keys: [KeyCode.SIX, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Show Shottr',
  },
];
