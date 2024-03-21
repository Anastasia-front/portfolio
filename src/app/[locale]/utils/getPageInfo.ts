import { HOME } from "@/constants";

export async function getPageInfo(pathname: URL) {
  const parts = String(pathname).split("/");
  const page = parts.length > 1 ? parts[1] : HOME;
  const name = parts.length > 2 ? parts[2] : "";

  return [page, name];
}
