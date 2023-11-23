module.exports = async (user, id) => {
    const msg = "The Twitter shortcode requires two named parameters: user and id."

    if(id && user)
    {
        const url = `https://twitter.com/${user}/status/${id}`;
        const query = encodeURI(`url=${url}&dnt=true`)
        const request = `https://publish.twitter.com/oembed?${query}`
        let response = await fetch(request)
        let json = await response.json()
        return json.html;
    }
    else    
        return msg;    
}