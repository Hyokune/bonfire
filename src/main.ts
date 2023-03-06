import { app, BrowserWindow } from 'electron';
import path from 'path';

const getWindowHref = () => {
  let url;

  console.log('NODE_ENV: ', process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'production') {
    url = new URL(path.join(__dirname, 'index.html'), 'file://');
  } else {
    url = new URL('http://localhost:3000');
  }

  return url.href;
};

const openMainWindow = () => {
  const win = new BrowserWindow({
    width: 1580,
    height: 720,
    webPreferences: {
      devTools: true,
    },
    autoHideMenuBar: true,
  });

  const href = getWindowHref();
  win.loadURL(href);
};

app.on('ready', () => {
  openMainWindow();
});

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
