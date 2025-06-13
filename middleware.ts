import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import { createMiddleware, detectBot, shield } from "@arcjet/next";
import aj from "./lib/arcjet";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
    })
  );

export default createMiddleware(validate);

//config for middleware to tell for which routes it should run
// This middleware will run for all routes except those that start with /api, _next/static, _next/image, and favicon.ico
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
