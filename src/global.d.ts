/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare global {
  interface Window {
    electron: {
      openDirectory: () => Promise<string | undefined>;
    };
  }
}

export {};
