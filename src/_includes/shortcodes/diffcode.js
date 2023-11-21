const markdownIt = require("markdown-it");
var hljs = require('highlight.js'); // https://highlightjs.org

module.exports = content => {
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
  }