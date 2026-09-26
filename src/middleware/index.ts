import { createMiddleware } from "@solidjs/start/middleware";
import { json } from "@solidjs/router";

const isTrustedOrigin = (origin: string) => {
  try {
    const url = new URL(origin);

    return (
      url.protocol === "https:" &&
      (url.hostname === "elparadisogonzalo.com" ||
        url.hostname.endsWith(".elparadisogonzalo.com"))
    );
  } catch {
    return false;
  }
};

export default createMiddleware({
  onBeforeResponse: (event) => {
    const { request, response } = event;

    const origin = request.headers.get("Origin");

    // Cache correctness
    response.headers.append(
      "Vary",
      "Origin, Access-Control-Request-Method"
    );

    if (!origin || !isTrustedOrigin(origin)) {
      return;
    }

    const requestUrl = new URL(request.url);
    const isApiRequest = requestUrl.pathname.startsWith("/api");

    if (!isApiRequest) {
      return;
    }

    const isPreflight =
      request.method === "OPTIONS" &&
      request.headers.has("Access-Control-Request-Method");

    if (isPreflight) {
      return json(null, {
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods":
            "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Authorization, Content-Type",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
  },
});
