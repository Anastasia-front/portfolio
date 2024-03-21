import { type NextRequest } from "next/server";
import { nextIntlMiddleware } from "./middleware";

// eslint-disable-next-line import/no-anonymous-default-export

export default function (request: NextRequest): Response {
  const requestHeaders = new Headers(request.headers);
  // Set "x-url" header with the request URL pathname
  requestHeaders.set("x-url", request.url);

  //   const response = NextResponse.next({
  //     request: {
  //       headers: requestHeaders,
  //     },
  //   });
  //   response.headers.set("x-url", request.url);
  //   return response;
  return nextIntlMiddleware(request);
}
