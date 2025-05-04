import ShottrIcon from '@renderer/assets/Shottr.png';

import { KeyCode } from '@renderer/types/keyCode';
import { Shortcut } from '@renderer/types/shortcut';

const tool = 'Shottr';
export const shottrShortcutList: Shortcut[] = [
  {
    keyCode: KeyCode.ONE,
    control: false,
    command: true,
    option: false,
    toolIcon: ShottrIcon,
    shift: true,
    tool,
    actionName: 'Fullscreen Screenshot',
  },
  {
    keyCode: KeyCode.TWO,
    control: false,
    command: true,
    option: false,
    toolIcon: ShottrIcon,
    shift: true,
    tool,
    actionName: 'Area Screenshot',
  },
  {
    keyCode: KeyCode.THREE,
    control: false,
    command: true,
    option: false,
    toolIcon: ShottrIcon,
    shift: true,
    tool,
    actionName: 'Any Window Screenshot',
  },
  {
    keyCode: KeyCode.FOUR,
    control: false,
    command: true,
    option: false,
    toolIcon: ShottrIcon,
    shift: true,
    tool,
    actionName: 'Scrolling Screenshot',
  },
  {
    keyCode: KeyCode.FIVE,
    control: false,
    command: true,
    option: false,
    toolIcon: ShottrIcon,
    shift: true,
    tool,
    actionName: 'Instant Text/QR Recognition',
  },
];
