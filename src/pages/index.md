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

{% figure, "/assets/images/uploads/alto.png" "test" "test" "tester" "/test/" "" "" "" "" "" "" %}

{% capture content %}
```javascript
console.log("Hello World!")
```
{% endcapture %}{% diffcode content %}

{% param, "hello" %}

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">No preview available</p></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:data_object" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text c-card__text--full-height">Param</p></div></div></div></div>

<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click and drag to move" height="15" role="presentation" draggable="true" />







{% summary_divider %}

<div class="c-card c-card--clickable"><div class="c-card__preview"><p class="u-hide-when-loaded">No preview available</p></div><div class="c-card__content"><div class="c-card__heading"><div class="c-card__icon "><cc-icon name="mdi:summarize" class="u-hide-when-loaded"></cc-icon></div><div class="c-card__heading-content"><p class="c-card__text c-card__text--full-height">Summary Divider</p></div></div></div></div>

<img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click and drag to move" height="15" role="presentation" draggable="true" />



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

{% youtube, "uutCnHzKsrc" "" "tester" "test" %}

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