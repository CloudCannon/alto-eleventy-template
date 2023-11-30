module.exports = (src, pageTitle, alt, caption, link_url, link_target, link_rel, attr, attrlink, className, width, height) => {
    console.log(width, height)
    return `<figure ${className? `class="${className}"` : ``}>${link_url ? `<a href="${link_url}" 
       ${ link_target ? `target="${link_target}"` : ``}${ link_rel ? `rel="${link_rel}"` : `` }>` : ``}<img src="${src}"
            ${ alt || caption ? `alt="${alt ? alt : caption}"` : ``}${ width ? `width="${width}"` : ``}${ height ? `height="${height}"` : ``}/><!-- Closing img tag -->
        ${link_url ? `</a>` : ``}${ pageTitle || caption || attr ?         
            `<figcaption>
                ${pageTitle ? `<h4>${pageTitle}</h4>` :
                `<p>
                    ${caption}
                    ${attrlink ? `<a href="${attrlink}">` : ``}                    
                    ${attr}
                    ${attrlink ? `</a>` : ``}
                    </p>`}</figcaption>` : ``}</figure>`
}