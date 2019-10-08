import { app, BrowserWindow } from "electron";

const createWindow = () => {
  // Create the browser window.
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  window.loadFile("index.html");
};

app.on("ready", createWindow);
