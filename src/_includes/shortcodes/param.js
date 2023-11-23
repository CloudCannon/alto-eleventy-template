module.exports = function(param_name) {
  let filtered = this.ctx.environments.collections["all"].filter(collection => collection.page.inputPath === this.page.inputPath)
  return filtered[0].data[param_name].toString()
}