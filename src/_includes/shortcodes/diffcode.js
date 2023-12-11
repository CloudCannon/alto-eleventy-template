const markdownIt = require("markdown-it");
const utils = require('markdown-it/lib/common/utils');
const hljs = require('highlight.js'); // https://highlightjs.org

module.exports = content => {
    let mainBlock = content.replace(/(^```.*)/mg, "");
    
    let diff = mainBlock.split("\n").filter(x => x !== "").join("\n");
    diff = diff.replace(/(?:^([+~\-]).*$)/mg, "$1"); 
    diff = diff.replace(/(?:^((?![+\-~]).*)$)/mg, "."); 
    diff = diff.replace(/\n/g, "");

    let lines = diff.split("");

    var result = markdownIt({
        html: true,
        highlight: function (str, lang) {            
            if (lang && hljs.getLanguage(lang)) {
                try {     
                    let highlight = hljs.highlight(str, { language: lang, ignoreIllegals: true });
                    highlight = highlight.value;    
                    let result = "";
                    highlight.split("\n").forEach((line, i) => {
                        line = line.replace(/(^([+\-~]))/mg, "");

                        switch (lines[i]) {
                            case "+":
                                result += `<span class="line" data-add="true"><span>${line}</span></span>`;
                                break;
                            case "-":
                                result += `<span class="line" data-remove="true"><span>${line}</span></span>`;
                                break;
                            case "~":
                                result += `<span class="line" data-highlight="true"><span>${line}</span></span>`;
                                break;
                            default:
                                result += line + "\n";
                        }
                    });
                    
                    return `<pre class="chroma"><code class="" data-lang='${lang}'>` +
                           result +
                           '</code></pre>';
                } catch (__) {}
            }
        
            return '<pre class="chroma"><code class="">' + utils.escapeHtml(str) + '</code></pre>';
        }
    }).render(content);

    return result;
};

