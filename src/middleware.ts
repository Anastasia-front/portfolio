import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { EN, locales, type Locale } from "./locales";

// Custom middleware function to set custom headers
export async function middleware(request: NextRequest): Promise<Response> {
  // Create a new Headers object from the request headers
  const requestHeaders = new Headers(request.headers);
  // Set "x-url" header with the request URL pathname
  requestHeaders.set("x-url", request.url);

  // Call the nextIntlMiddleware to get the response
  const nextIntlResponse = await nextIntlMiddleware(request);

  // Clone the headers of the nextIntlResponse
  const responseHeaders = new Headers(nextIntlResponse.headers);

  // Set the "x-url" header in the responseHeaders
  responseHeaders.set("x-url", request.url);

  // Create a new Response with the existing body, updated headers, and other properties
  const customResponse: Response = new NextResponse(nextIntlResponse.body, {
    headers: responseHeaders,
    status: nextIntlResponse.status,
    statusText: nextIntlResponse.statusText,
  });

  return customResponse;
}

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: EN as Locale,
  localePrefix: "never",
});

// Exporting default middleware function
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextRequest): Promise<Response> {
  return middleware(req);
}

// Configuration for the middleware
export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
