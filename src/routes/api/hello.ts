import { json } from "@solidjs/router";
import { GET } from "@solidjs/start";

export const hello = GET(async (name: string) => {
  "use server";

  const value = await new Promise<string>((resolve) =>
    setTimeout(() => resolve(name), 1000)
  );

  return json({
    hello: value,
  });
});
