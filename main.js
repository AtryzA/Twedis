const electron = require('electron');
const appExpress = require('./index');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('http://127.0.0.1:3000');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});