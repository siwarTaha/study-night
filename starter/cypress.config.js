import { defineConfig } from "cypress";
import { spawn } from "node:child_process";
import { request } from "node:http";

let serverProcess;

const isServerReady = (url) =>
  new Promise((resolve) => {
    const req = request(url, () => resolve(true));

    req.on("error", () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });

const waitForServer = async (url) => {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    if (await isServerReady(url)) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Server did not start at ${url}`);
};

const startServer = async (url) => {
  if (await isServerReady(url)) {
    return;
  }

  serverProcess = spawn(
    process.execPath,
    [
      "node_modules/parcel/lib/bin.js",
      "index.html",
      "--port",
      "1234",
      "--host",
      "localhost",
    ],
    {
      cwd: process.cwd(),
      stdio: "ignore",
      windowsHide: true,
    },
  );

  await waitForServer(url);
};

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234",
    supportFile: false,
    async setupNodeEvents(on, config) {
      await startServer(config.baseUrl);

      on("after:run", () => {
        if (serverProcess) {
          serverProcess.kill();
          serverProcess = undefined;
        }
      });

      return config;
    },
  },
});
