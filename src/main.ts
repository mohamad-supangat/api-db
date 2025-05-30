import { serve } from "bun";
import { isEmpty, realEscapeString } from "./helpers";
import kodepos from "./controllers/kodepos";
import sekolah from "./controllers/sekolah";
const port = process.env.PORT || 3000;

export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ message: `Hello from bun@${Bun.version}` }),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}

// serve({
//   idleTimeout: 100,
//   port,
//   development: true,
//   async fetch(req) {
//     const currentUrl = new URL(req.url);
//     let searchQuery: string =
//       currentUrl.searchParams.get("q")?.toString() ?? "";
//     searchQuery = realEscapeString(searchQuery)!;
//
//     if (!isEmpty(searchQuery) && currentUrl.pathname == "/kodepos/search") {
//       return kodepos(searchQuery);
//     }
//
//     if (!isEmpty(searchQuery) && currentUrl.pathname == "/sekolah/search") {
//       return sekolah(searchQuery);
//     }
//
//     return Response.redirect("https://s.id/aurakomputer");
//   },
// });
//
// console.log(`listening on ${port}`);
