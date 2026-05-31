const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  moveWindow: (dx, dy) => ipcRenderer.send('move-window', { dx, dy }),
  onSetSkin: (callback) => ipcRenderer.on('set-skin', (_, skinId) => callback(skinId)),
  getSkins: () => ipcRenderer.invoke('get-skins'),
  showContextMenu: () => ipcRenderer.send('show-context-menu'),
});
