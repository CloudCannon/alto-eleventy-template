---
_schema: page
permalink: /
title: Welcome 👋
layout: layouts/page.html
eleventyNavigation:
  key: Home
  order: 0
tags: page
SEO_options:
  title:
  image:
  description:
draft: false
---
Alto is a minimal and modern Hugo theme for static documentation sites, created by and optimized for <a href="https://cloudcannon.com" target="_blank" rel="noopener">CloudCannon</a>.

Designed initially for open-source software, Alto has many built-in features to aid both site users and documentation writers:

* Built-in static search with <a href="https://pagefind.app" target="_blank" rel="noopener">Pagefind</a>;

* Twelve pre-configured Hugo shortcodes, including diff syntax highlighting, GitHub Gist embeds, and tree diagram formatter;

* Light/dark modes, with configurable color palettes;

* Easily configurable navigation and footer content;

* Flexible grouping options for docs pages;

* Automatic anchor links to subheadings;

* Optional announcement banner;

* Styled with Sass;&nbsp;

* Optimized for editing and publishing on CloudCannon.

To get started with Alto, create a CloudCannon account and check out the [Getting Started documentation](/docs/).

## Showcase

CloudCannon uses Alto as the documentation site template for our own open-source tools. Take a look at these sample sites to see what's possible with static documentation on Alto:&nbsp;

* <a href="https://pagefind.app/" target="_blank" rel="noopener">Pagefind</a>

* <a href="https://rosey.app/" target="_blank" rel="noopener">Rosey</a>

* <a href="https://reseed.app/" target="_blank" rel="noopener">Reseed</a>

{% include 'shortcodes/diffcode.html', lang: "javascript" inner: "new PagefindUI({
    element: \"#search\",
+    mergeIndex: [{
+        bundlePath: \"https://docs.example.com/_pagefind\"
+    }]
})" %}