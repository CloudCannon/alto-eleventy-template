const matter = require('gray-matter')
const fs = require('fs')

module.exports = param_name => {
  const str = fs.readFileSync(this.page.inputPath, 'utf8')
  const data = matter(str).data
  return data[param_name] ? data[param_name] : `Param ${param_name} not found.`
}