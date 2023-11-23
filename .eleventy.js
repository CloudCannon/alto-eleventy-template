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

// shortcode requires
const twitter = require('./src/_includes/shortcodes/twitter')
const youtube = require('./src/_includes/shortcodes/youtube')
const vimeo = require('./src/_includes/shortcodes/vimeo')
const figure = require('./src/_includes/shortcodes/figure')
const gist = require('./src/_includes/shortcodes/gist')
const summary_divider = require('./src/_includes/shortcodes/summaryDivider')

const diffcode = require('./src/_includes/shortcodes/diffcode')
const tree = require('./src/_includes/shortcodes/tree')

module.exports = function(eleventyConfig) {

  // shortcodes
  eleventyConfig.addShortcode("twitter", twitter)
  eleventyConfig.addShortcode("youtube", youtube)
  eleventyConfig.addShortcode("vimeo", vimeo)
  eleventyConfig.addShortcode("figure", figure)
  eleventyConfig.addShortcode("gist", gist)
  eleventyConfig.addShortcode("summary_divider", summary_divider)
  eleventyConfig.addShortcode("diffcode", diffcode)
  eleventyConfig.addShortcode("tree", tree)

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
    text = text.replace(/<code>([^<]{0,30})<\/code>/, "<code class=\"inline\">$1</code>")
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