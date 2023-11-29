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
Alto is a minimal and modern Hugo theme for static documentation sites, created by and optimized for <a target="_blank" rel="noopener" href="https://cloudcannon.com">CloudCannon</a>.

{% include 'shortcodes/diffcode.html', lang: "js" inner: "new PagefindUI({
    element: \"#search\",
+    mergeIndex: [{
+        bundlePath: \"https://docs.example.com/_pagefind\"
+    }]
})" %}

{% capture content %}
```javascript
console.log("Hello World!")
```
{% endcapture %}{% diffcode content %}

{% param, "hello" %}



{% summary_divider %}




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



{% twitter, "hi" "123" %}


Designed initially for open-source software, Alto has many built-in features to aid both site users and documentation writers:

* Built-in static search with <a target="_blank" rel="noopener" href="https://pagefind.app">Pagefind</a>;
* Twelve pre-configured Hugo shortcodes, including diff syntax highlighting, GitHub Gist embeds, and tree diagram formatter;
* Light/dark modes, with configurable color palettes;
* Easily configurable navigation and footer content;
* Flexible grouping options for docs pages;
* Automatic anchor links to subheadings;
* Optional announcement banner;
* Styled with Sass;&nbsp;
* Optimized for editing and publishing on CloudCannon.

To get started with Alto, create a CloudCannon account and check out the [Getting Started documentation](/docs/).

<!--more-->

## Showcase

CloudCannon uses Alto as the documentation site template for our own open-source tools. Take a look at these sample sites to see what's possible with static documentation on Alto:&nbsp;

* <a target="_blank" rel="noopener" href="https://pagefind.app/">Pagefind</a>
* <a target="_blank" rel="noopener" href="https://rosey.app/">Rosey</a>
* <a target="_blank" rel="noopener" href="https://reseed.app/">Reseed</a>