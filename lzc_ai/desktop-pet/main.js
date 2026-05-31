const { app, BrowserWindow, screen, ipcMain, Menu } = require('electron');
const path = require('path');

let win;

const SKIN_OPTIONS = [
  { id: 'orange', label: '橘猫' },
  { id: 'black',  label: '黑猫' },
  { id: 'white',  label: '白猫' },
  { id: 'gray',   label: '灰猫' },
];

function createWindow() {
  const { width: screenW, height: screenH } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: 200,
    height: 240,
    x: screenW - 220,
    y: screenH - 260,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    hasShadow: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => app.quit());

// 窗口拖拽
ipcMain.on('move-window', (_, { dx, dy }) => {
  if (win) {
    const [x, y] = win.getPosition();
    win.setPosition(x + dx, y + dy);
  }
});

// 获取皮肤列表
ipcMain.handle('get-skins', () => SKIN_OPTIONS);

// 右键上下文菜单
ipcMain.on('show-context-menu', (event) => {
  const template = [
    {
      label: '切换皮肤',
      submenu: SKIN_OPTIONS.map((skin) => ({
        label: skin.label,
        type: 'radio',
        click: () => {
          win.webContents.send('set-skin', skin.id);
        },
      })),
    },
    { type: 'separator' },
    { label: '退出', click: () => app.quit() },
  ];
  const menu = Menu.buildFromTemplate(template);
  menu.popup({ window: win });
});
