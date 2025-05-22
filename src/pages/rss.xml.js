import rss from '@astrojs/rss';
import { siteConfig } from '../config/site';
import { companyConfig } from '../config/company'; // Used for title fallback if siteConfig.name is generic

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: siteConfig.name || companyConfig.name,
    // `<description>` field in output xml
    description: siteConfig.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: context.site,
    // list of `<item>`s in output xml
    // simple example: generate items for each one of your Markdown posts
    items: [], // TODO: Populate with actual blog post data when available
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
