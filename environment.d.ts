declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Environment for DB
      DB_HOST: string;
      DB_PORT: number;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      // Environment for APP
      APP_PORT: number;
    }
  }
}

export {};
