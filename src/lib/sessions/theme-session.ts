import { useSession } from "vinxi/http";

type SessionData = {
  theme: "light" | "dark";
};

export async function useThemeSession() {
  "use server";

  const session = await useSession<SessionData>({
    password: process.env.SESSION_SECRET as string,
    name: "theme",
  });

  // Initialize default theme if missing
  if (!session.data.theme) {
    await session.update({
      theme: "light",
    });
  }

  return session;
}
