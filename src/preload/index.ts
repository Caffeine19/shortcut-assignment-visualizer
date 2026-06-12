import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge, ipcRenderer } from 'electron';

// Custom APIs for renderer
const api = {
  // Search functionality
  onToggleSearch: (callback: () => void) => {
    const unsubscribe = () => ipcRenderer.removeListener('toggle-search', callback);
    ipcRenderer.on('toggle-search', callback);
    return unsubscribe;
  },
  /** Request the main process to open a new window */
  createWindow: () => {
    ipcRenderer.send('create-window');
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
