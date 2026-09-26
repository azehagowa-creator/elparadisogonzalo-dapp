import { useThemeSession } from "./theme-session";

export async function clearThemeSession() {
  "use server";

  const session = await useThemeSession();

  await session.clear();
}
