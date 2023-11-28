# Alto Eleventy Template

Alto is a minimal and modern Eleventy template for static documentation sites, created by and optimized for [CloudCannon](https://cloudcannon.com). Browse through a [live demo](https://holy-ball.cloudvent.net/).
 

Designed initially for open-source software, Alto has many built-in features to aid both site users and documentation writers:

- Built-in static search with [Pagefind](https://pagefind.app);
- Eleven pre-configured shortcodes, including diff syntax highlighting, GitHub Gist embeds, and tree diagram formatter;
- Light/dark modes, with configurable color palettes;
- Easily configurable navigation and footer content;
- Flexible grouping options for docs pages;
- Automatic anchor links to subheadings;
- Optional announcement banner;
- Styled with Sass;
- Optimized for editing and publishing on CloudCannon.



## Showcase

CloudCannon uses Alto as the documentation site template for our own open-source tools. Take a look at these sample sites to see what's possible with static documentation on Alto:

- [Pagefind](https://pagefind.app/)
- [Rosey](https://rosey.app/)
- [Reseed](https://reseed.app/)


## Expectations

### Dependencies

- This template expects `alpinejs` to be installed by the site.
- This template expects [Pagefind](https://pagefind.app) to run after a site build.

### General info

Required information can be seen in the `data/meta.yml` 

- `project_name`
  - Used for SEO tags, alt text, and similar places
- `default_og_image`
  - Self explanatory
- `favicon`
  - set the path to the favicon files



## Writing documentation

This site template is intended to be used as a documentation site with a landing page.

- `pages/index.md` should be used for the homepage.
- `docs/_index.md` represents the `/docs/` page.
- All other pages in `docs` will live at their respective path.
  - i.e. `docs/this/that.md` represents `/docs/this/that/`

### Front matter

- `title`
  - Used as the page h1, and in page SEO tags
- `eleventyNavigation > key`
  - Used as a shorter title variant in the side navigation
- `tags`
  - Determines which heading this page should be placed under in the side navigation
  - 'page' refers to top level pages and will not display a category heading in the navigation
- `order`
  - Determines the order in which pages appear in the side navigation (lower is higher)

### Navigation

The site side-navigation only supports one level of nesting, and is configured via the `eleventyNavigation` front matter.

The top-level groups (tags: 'page') are in the order that they are first encountered after sorting all pages by `order`. Lowering a page's weight may move the `eleventyNavigation` for that page up the hierarchy.

Pages can be placed outside of a group (alongside the homepage) by assigning them the `tags` of `page`.

### Shortcodes

#### Diffcode

This template provides a `diffcode` shortcode that can provide source highlighting alongside diff highlighting. This shortcode should wrap a markdown code block that has a tagged language. For example, from the pagefind docs:

````markdown
{% capture content %}
```js
new PagefindUI({
    element: "#search",
+    mergeIndex: [{
+        bundlePath: "https://docs.example.com/_pagefind"
+    }]
})
```
{% endcapture %}
{% diffcode content %}
````

The code block will be rendered with the leading `+` removed from each line, and those lines will then be highlighted green to represent a diff.

#### Tree

This template provides a `tree` shortcode that can help render an ASCII directory tree structure. The given `char` (default `>`) will be replaced with the appropriate box drawing character from the supported set. For example:

```markdown
{% capture treecontent %}
package.json
_includes/
>> _layouts/
>  >> default.liquid
>  >> page.liquid
>> file.liquid
_site/
>> index.html
{% endcapture %}{% tree treecontent %}
```

Will output:

```text
package.json
_includes/
├─ _layouts/
│  ├─ default.liquid
│  └─ page.liquid
└─ file.liquid
_site/
└─ index.html
```

The `tree` shortcode delegates its output to `diffcode` automatically, so lines can be prepended with a `+` character to represent new files.


### Page links

All headings on doc pages will have a clickable hash link inserted in the left gutter.

## Banner

`data/banner.yml` can be provided to show a banner on the top of each page:


- `enable_banner`
  - Set to `true` to show the banner
- `html`
  - HTML (placed inside of a `<p>` tag) to show in the banner. Supports adding alpine directives.
- `id`
  - An ID used to store that the banner has been closed in localStorage. Make sure to change this when adding a new banner so that users who dismissed the last one will see it.
- `show_until`
  - A date timestamp, after which the banner should not be shown. This is useful for time-sensitive banners, such as a notice about a new release.
