import { useThemeSession } from "./theme-session";

export async function getThemeSession() {
  "use server";

  const session = await useThemeSession();

  return session.data.theme;
}
