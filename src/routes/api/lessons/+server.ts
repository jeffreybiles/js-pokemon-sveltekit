import type { RequestHandler } from "@sveltejs/kit";
import { lessons } from "./lessons"

export const GET = (() => {
  return new Response( JSON.stringify({ lessons }) )
}) satisfies RequestHandler