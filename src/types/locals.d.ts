/// <reference types="@solidjs/start/env" />

declare module App {
  interface RequestEventLocals {
    /**
     * Custom per-request state stored in event.locals
     */
    user?: {
      name: string;
      email?: string;
      role?: string;
    };

    theme?: "light" | "dark";

    userAgent?: string | null;

    sayHello?: () => string;

    startTime?: number;
  }
}
