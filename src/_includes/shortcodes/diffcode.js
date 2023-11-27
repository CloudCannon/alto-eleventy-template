const markdownIt = require("markdown-it");
var hljs = require('highlight.js'); // https://highlightjs.org

module.exports = (language,content) => {
    let mainBlock = "```js" + content + "```"
    
    let diff = content.split("\n").filter(x => x !== "").join("\n")
    diff = diff.replace(/(?:^([+-]).*$)/mg, "$1")
    diff = diff.replace(/(?:^((?!\+).*)$)/mg, ".")
    diff = diff.replace(/\n/g, "")

    let lines = diff.split("")   

    var result = markdownIt({
        html:true,
        highlight: function (str, lang) {            
            if (language && hljs.getLanguage(language)) {
              try {     
                let highlight = hljs.highlight(str, { language: language, ignoreIllegals: true });
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
                
                return `<pre class="chroma"><code class="" data-lang='${language}'>` +
                       result +
                       '</code></pre>';
              } catch (__) {}
            }
        
            return '<pre class="chroma"><code class="">' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    }).render(mainBlock)
    return result
  }