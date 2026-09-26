declare module "@solidjs/start/server" {
  interface RequestEventLocals {
    user: {
      name: string;
      email: string;
      role: string;
    };

    sayHello: () => string;
  }
}
