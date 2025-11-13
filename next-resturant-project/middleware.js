import { NextResponse } from "next/server";

export function middleware(req) {
    const token = req.cookies.get('Token');

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
}

export const config = {
    matcher: ['/profile/:path*']
}