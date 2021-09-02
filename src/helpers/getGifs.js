export const getGifs = async category => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=0HgmvrPSVGyt8ZDOFPqn7IG6F96gNRh5&q=${encodeURI(
            category.trim()
        )}&limit=10`
        const res = await fetch(url)
        const { data } = await res.json()
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            imgUrl: img.images?.downsized_medium.url,
        }))
        return gifs
    } catch (error) {
        console.error(error)
    }
}
