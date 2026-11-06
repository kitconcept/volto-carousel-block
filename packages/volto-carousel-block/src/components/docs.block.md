---
block: carousel
---

Shows a horizontal carousel of teasers, with arrows and dots to move between them. Each item is a teaser that links to a content item or an external URL. Use it for a set of highlights chosen by hand.

Each item reads its title, description and image from the target item, unless it overrides them. The carousel shows `items_to_show` items at a time, and the rest are reached by scrolling.

### Fields

- `headline`: optional text shown above the carousel.
- `columns`: the list of items. Each item is a teaser, with the fields below.
- `items_to_show`: how many items are visible at a time, `2` or `4`. Defaults to `4`.
- `hide_description`: boolean. When `true`, the carousel does not show the description of its items.
- `loop`: boolean, optional. When `true`, the carousel continues from the last item to the first.

### Items

Each item in `columns` has these fields.

- `@id`: a unique identifier for the item, such as a UUID.
- `@type`: always `teaser`.
- `href`: a list with one item, `[{ "@id": path or URL, "title": title }]`. Use a path for content from the site, or a full URL for an external link. Usually this is the only field needed.
- `overwrite`: boolean. When `true`, the item uses its own `title`, `description`, `head_title` and `preview_image` instead of the target's, and it no longer follows changes to the target.
- `title`, `head_title`, `description`: text to show when `overwrite` is `true`. `head_title` is the kicker above the title.
- `preview_image`: only with `overwrite`. A list with one item, `[{ "@id": path, "image_field": "image" }]`; leave out `image_field` for an external image.
- `openLinkInNewTab`: boolean. When `true`, the link opens in a new browser tab.

### Example

```json
{
  "@type": "carousel",
  "headline": "Latest news",
  "items_to_show": 2,
  "hide_description": false,
  "columns": [
    {
      "@id": "3f9c1a7e-2b4d-4e8a-9c1f-6d2b8a5e7f10",
      "@type": "teaser",
      "href": [{ "@id": "/news/annual-report-2025", "title": "Annual Report 2025" }]
    },
    {
      "@id": "9a2e4c6b-1d3f-4a5b-8c7d-0e9f1a2b3c4d",
      "@type": "teaser",
      "href": [{ "@id": "https://example.org/press", "title": "Press" }],
      "overwrite": true,
      "title": "Press kit",
      "description": "Logos, photos and facts for journalists.",
      "openLinkInNewTab": true
    }
  ]
}
```
