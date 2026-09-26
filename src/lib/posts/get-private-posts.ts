import { getUser } from "~/lib/auth/get-user";
import { db } from "~/lib/db";

export async function getPrivatePosts() {
  "use server";

  const user = await getUser();

  if (!user) {
    return null; // or you could: throw redirect("/login");
  }

  return await db.getPosts({
    userId: user.id,
    private: true,
  });
}
