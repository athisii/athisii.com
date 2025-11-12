import {NextRequest, NextResponse} from "next/server";

export const config = {
    matcher: ['/((?!api|_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};

export default function proxy(request: NextRequest) {
    console.log("request: ", request)
    return NextResponse.next();
}