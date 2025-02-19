const apiKey = import.meta.env.VITE_API_KEY

export const fetchGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${category}&limit=5`
    const resp = await fetch(url)

    const { data } = await resp.json()

    const gifs = data.map(({ id, title, images, url, username, user, rating, type }) => ({
        id: id,
        title: title,
        thumbnail: images?.downsized_medium?.url,
        url: url,
        user: username,
        userThumbnail: user?.avatar_url,
        userUrl: user?.profile_url,
        rating: rating,
        type: type,
    }))
    return gifs
}
