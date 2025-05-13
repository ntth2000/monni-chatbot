import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const currentPath = request.nextUrl.pathname;
  const fromLogout = request.nextUrl.searchParams.has("fromLogout");

  const isLogin = currentPath === "/login";
  const isRegister = currentPath === "/register";
  const isHome = currentPath === "/";

  // Nếu chưa login mà vào trang chính → redirect về /login
  if (isHome && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Nếu đã login mà cố vào /login hoặc /register → redirect về /
  if ((isLogin || isRegister) && accessToken && !fromLogout) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register"],
};
