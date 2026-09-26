import type { SessionData } from "./theme-session";
import { useThemeSession } from "./theme-session";

export async function updateThemeSession(data: SessionData) {
  "use server";

  const session = await useThemeSession();

  await session.update(data);
}
