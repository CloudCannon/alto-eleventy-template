const esbuild = require('esbuild');
const yaml = require("js-yaml");
const { execSync } = require('child_process')
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const markdownIt = require("markdown-it");
const markdownItNamedHeadings = require("markdown-it-named-headings");

const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true
};
const markdownRenderer = markdownIt(markdownOptions).use(markdownItNamedHeadings);

module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode("figure", (image, caption, className) => {
    return `<figure${className ? ` class="${className}"` : ''}><img src="${image}" />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
  });

  eleventyConfig.setLibrary("md", markdownRenderer);

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/assets/images");
  
  // esbuild
  eleventyConfig.addWatchTarget('./src/assets/js/**');
  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/assets/js/**'],
      outdir: '_site/js',
      bundle: true,
      minify: true,
      sourcemap: true,
    });
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("pagefind_ignore", text => {
    text = text.replace(/(<h[2-6]\sid=\"([^\"]+)\"\s?>)(.+)(<\/h[2-6]+>)/, "$1<a data-pagefind-ignore class=\"anchor\" href=\"#$2\" title=\"Link to $3\">#</a>$3$4")
    return text;
  });

  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  }
};