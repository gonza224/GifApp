import { useState, useEffect } from "react"
import { fetchGifs } from "../helpers/fetchGifs"

export const useFetchGifs = ( {category} ) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifs = async() => {
        setGifs(await fetchGifs(category))
        setIsLoading(false)
    }

    useEffect(() => {
        getGifs()
    }, [])

    return {
        gifs,
        isLoading
    }
}
