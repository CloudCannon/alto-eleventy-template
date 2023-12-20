---
_schema: page
permalink: /docs/
title: Getting Started
layout: layouts/page.html
eleventyNavigation:
  key: Getting Started
  order: 1
tags: page
SEO_options:
  title:
  image:
  description:
draft: false
---
To create a new Alto site and deploy it immediately to CloudCannon, click <a target="_blank" rel="noopener" href="https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/alto-eleventy-template">here</a>.

## Creating new site pages

For this guide we'll work through a single example: creating a new documentation on Alto within CloudCannon, and ensuring it's shown in the correct place in your navigation bar.

Navigation in Alto is handled by front matter in Eleventy, which can be easily edited in CloudCannon's <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/introducing-the-data-editor/">Data Editor</a>.

The site side-navigation only supports one level of nesting, and is configured via the `eleventyNavigation` front matter.

The top-level groups (tags: 'page') are in the order that they are first encountered after sorting all pages by `order`. Lowering a page's weight may move the `eleventyNavigation` for that page up the hierarchy.

Pages can be placed outside of a group (alongside the homepage) by assigning them the `tags` of `page`.

{% figure "/assets/images/uploads/screenshot-2023-12-21-at-12.08.25-pm" "" "alt" "" "#link" "target" "rel" "" "attrlink" "className" "300" "200" %}

