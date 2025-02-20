declare global {
  interface Window {
    electron: {
      fs: any;
      selectFolder(): Promise<any>;
      selectFile(): Promise<any>;
      ipcRenderer: {
        myPing(): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        on(channel: string, func: (...args: any[]) => void): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        once(channel: string, func: (...args: any[]) => void): void;
      };
    };
  }
}

export {};
