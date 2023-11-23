module.exports = function(path, lang, output){    
    let candidates = []
    if(path.split(".").length > 1) // file extension?
    {
        let filtered = this.ctx.environments.collections["all"].filter(collection => collection.page.inputPath.indexOf(path) != -1)

        candidates = filtered.map(filtered_collection => {
            let file = filtered_collection.page.inputPath.indexOf(`/${path}`)
            if(file !== -1)
                return filtered_collection.page.url
        })
    }
    else // url
    {
        let filtered = this.ctx.environments.collections["all"].filter(collection => collection.page.url.indexOf(path) != -1)

        if(path[0] === "/")
            path = path.split("").splice(1).join("")
        if(path[path.length-1] === "/")
            path = path.split("").splice(0,path.length-1).join("")        

        console.log(path)

        candidates = filtered.map(filtered_collection => {
            let url = filtered_collection.page.url.indexOf(`/${path}/`)
            if(url !== -1)
                return filtered_collection.page.url
        })
    }    

    if(candidates.length > 1)
        return "Ref: ambiguous reference: multiple candidates found."
    else if(candidates.length === 1)        
        return candidates[0]
    else
        return "Ref: no reference found."
}