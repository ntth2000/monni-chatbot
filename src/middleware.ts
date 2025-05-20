import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const currentPath = request.nextUrl.pathname;
  const fromLogout = request.nextUrl.searchParams.has("fromLogout");

  const isLogin = currentPath === "/login";
  const isHome = currentPath === "/";

  if (isHome && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLogin && accessToken && !fromLogout) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
