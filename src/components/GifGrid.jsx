import GifItem from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const GifGrid = ({category, onRemoveCategory}) => {
    
    const { gifs, isLoading } = useFetchGifs({category})

    return (
        <>
        <div className='category-title'>
            <span>{category}'s category</span>
            <a className='dismiss' onClick={() => onRemoveCategory(category)}>
                <FontAwesomeIcon icon={faXmarkCircle}/>
            </a>
        </div>
        <hr/>
        
        <div className='card-list'>
            {
                gifs.map(gif => <GifItem key={gif.id} {...gif} />)
            }
        </div>
        </>
    )
}
