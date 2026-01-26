import ShottrIcon from '@renderer/assets/Shottr.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Shottr';
export const shottrShortcutList: Shortcut[] = [
  {
    keys: [KeyCode.ONE, 'command', 'shift'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Fullscreen Screenshot',
  },
  {
    keys: [KeyCode.TWO, 'command', 'shift'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Area Screenshot',
  },
  {
    keys: [KeyCode.THREE, 'command', 'shift'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Any Window Screenshot',
  },
  {
    keys: [KeyCode.FOUR, 'command', 'shift'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Scrolling Screenshot',
  },
  {
    keys: [KeyCode.FIVE, 'command', 'shift'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Instant Text/QR Recognition',
  },
];
