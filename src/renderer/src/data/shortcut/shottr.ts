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
    raycastExtension: 'Shottr',
  },
  {
    keys: [KeyCode.TWO, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Area Screenshot',
    raycastExtension: 'Shottr',
  },
  {
    keys: [KeyCode.THREE, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Any Window Screenshot',
    raycastExtension: 'Shottr',
  },
  {
    keys: [KeyCode.FOUR, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Scrolling Screenshot',
    raycastExtension: 'Shottr',
  },
  {
    keys: [KeyCode.FIVE, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Instant Text/QR Recognition',
    raycastExtension: 'Shottr',
  },
  {
    keys: [KeyCode.SIX, 'shift', 'command'],
    toolIcon: ShottrIcon,
    tool,
    actionName: 'Show Shottr',
    raycastExtension: 'Shottr',
  },
];
