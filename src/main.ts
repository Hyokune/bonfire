import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1580,
    height: 720,
    webPreferences: {
      devTools: true,
    },
  });

  console.log('IS DEV: ', isDev);

  win.loadURL(isDev ? 'http://localhost:3000' : `file://${app.getAppPath()}/index.html`);
});

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
