import { http, HttpResponse, delay } from "msw";
import { getItems } from "../data/items";

export const itemsHandlers = [
  http.get("/api/items", async ({ request }) => {
    await delay(500);
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";

    let items = getItems();

    if (search) {
      items = items.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return HttpResponse.json({
      data: items,
    });
  }),
];
