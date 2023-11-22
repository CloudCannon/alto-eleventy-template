module.exports = (id, autoplay, pageTitle, className) => {
    return `<div ${ className? `class="${className}"` : `style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"`}>
        <iframe src="https://www.youtube.com/embed/${id}" ${ autoplay === "true" ? `autoplay=1` : ``} ${ !className ? `style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;"` : ``} allowfullscreen title="${pageTitle}"></iframe>
    </div>`
}