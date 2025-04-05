import rss from "@astrojs/rss";
import { SITE } from "@config";

export async function GET() {
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: [],
  });
}
