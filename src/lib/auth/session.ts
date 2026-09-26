import { query, redirect } from "@solidjs/router";
import { useSession } from "vinxi/http";

import { db } from "./db";

export const getCurrentUserQuery = query(async () => {
  "use server";

  const session = await useSession({
    password: process.env.SESSION_SECRET as string,
    name: "session",
  });

  if (!session.data.userId) {
    throw redirect("/login");
  }

  return await db.users.get({
    id: session.data.userId,
  });
}, "currentUser");
