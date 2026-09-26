import { redirect } from "@solidjs/router";

import { getSession } from "./session";
import { db } from "./db";

export async function getUser() {
  "use server";

  const session = await getSession();
  const userId = session.data.userId;

  if (!userId) {
    throw redirect("/login");
  }

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw redirect("/login");
    }

    return user;
  } catch (error) {
    throw redirect("/login");
  }
}
