import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      onToggleSearch: (callback: () => void) => () => void
    }
  }
}
