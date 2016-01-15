import { TwitterFluxAPI } from './src/server/server';

const http = require('http');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
let server = http.createServer(TwitterFluxAPI);
server.listen(3000, () => {
  console.log('Listening on port 3000.');
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 450,
    minWidth: 440,
    maxWidth: 590,
    height: 800,
    titleBarStyle: 'hidden-inset',
    useContentSize: true
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
