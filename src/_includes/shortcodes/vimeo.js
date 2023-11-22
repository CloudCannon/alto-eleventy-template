module.exports = (id, className, pageTitle) => {
    return `<div ${className ? `class="${className}"` : `style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"`}>
        <iframe src="https://player.vimeo.com/video/${id}?dnt=1" ${!className ? `style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;"` : ``} ${pageTitle ? `title="${pageTitle}"` : `title="vimeo video"`} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>`
}