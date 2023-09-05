import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "signup";
  const token = request.cookies.get("token")?.value || "";
  const isPrivatePath = path === "/profile";
  // if(isPublicPath&&token){
  //     await  NextResponse.redirect(new URL('/', request.url))
  // }
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile/(.*)", "/login", "/signup"],
};
