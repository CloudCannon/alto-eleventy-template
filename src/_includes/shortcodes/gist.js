module.exports = (username, id, file) => {
  return `<script type="application/javascript" src="https://gist.github.com/${username}/${id}.js${file ? `?file=${file}` : ``}"></script>`
}