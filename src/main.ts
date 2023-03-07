import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import path from 'path';

let browserWindow: BrowserWindow;

const getWindowHref = () => {
  let url;

  if (process.env.NODE_ENV === 'production') {
    url = new URL(path.join(__dirname, 'index.html'), 'file://');
  } else {
    url = new URL('http://localhost:3000');
  }

  return url.href;
};

async function handleDirectoryOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog(browserWindow, {
    properties: ['openDirectory'],
  });

  if (canceled) {
    return;
  } else {
    return filePaths[0];
  }
}

const openMainWindow = () => {
  browserWindow = new BrowserWindow({
    width: 1580,
    height: 720,
    webPreferences: {
      devTools: true,
      preload: path.join(__dirname, './preload.js'),
    },
    autoHideMenuBar: true,
  });

  const href = getWindowHref();
  browserWindow.loadURL(href);
};

app.on('ready', () => {
  ipcMain.handle('dialog:openDirectory', handleDirectoryOpen);
  openMainWindow();
});

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
