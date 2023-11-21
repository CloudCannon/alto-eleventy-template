const esbuild = require('esbuild');
const yaml = require("js-yaml");
const { execSync } = require('child_process')
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const markdownIt = require("markdown-it");
const markdownItNamedHeadings = require("markdown-it-named-headings");
var hljs = require('highlight.js'); // https://highlightjs.org

const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true
};
const markdownRenderer = markdownIt(markdownOptions).use(markdownItNamedHeadings);

module.exports = function(eleventyConfig) {

  // shortcodes
  eleventyConfig.addShortcode("figure", (image, caption, className) => {
    return `<figure${className ? ` class="${className}"` : ''}><img src="${image}" />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
  });

  eleventyConfig.addShortcode("diffcode", content => {
    let mainBlock = content.replace(/(^```.*)/mg, "")
    
    let diff = mainBlock.split("\n").filter(x => x !== "").join("\n")
    diff = diff.replace(/(?:^([+-]).*$)/mg, "$1")
    diff = diff.replace(/(?:^((?!\+).*)$)/mg, ".")
    diff = diff.replace(/\n/g, "")

    let lines = diff.split("")   

    var result = markdownIt({
        html:true,
        highlight: function (str, lang) {            
            if (lang && hljs.getLanguage(lang)) {
              try {     
                let highlight = hljs.highlight(str, { language: lang, ignoreIllegals: true });
                highlight = highlight.value;    
                let result = "";
                highlight.split("\n").forEach((line, i) => {
                    if(lines[i] === "+")
                    {
                        line = line.replace(/(^([+-]))/mg, "")
                        result += `<span class="line" data-add="true"><span>${line}</span></span>`
                    }
                    else
                        result += line + "\n"
                })
                
                return `<pre class="chroma"><code class="hljs" data-lang='${lang}'>` +
                       result +
                       '</code></pre>';
              } catch (__) {}
            }
        
            return '<pre class="chroma"><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    }).render(content)
    return result
  })

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