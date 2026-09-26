import { action, redirect } from "@solidjs/router";
import { useSession } from "vinxi/http";

import { db } from "./db";

export const logout = action(async () => {
  "use server";

  const session = await useSession({
    password: process.env.SESSION_SECRET as string,
    name: "session",
  });

  const sessionId = session.data.sessionId;

  if (sessionId) {
    await session.clear();
    await db.session.delete({
      id: sessionId,
    });
  }

  throw redirect("/");
}, "logout");
