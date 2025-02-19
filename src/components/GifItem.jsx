import {handleUrlClick} from '../helpers/functions'

const GifItem = ({title, thumbnail, url, user, userThumbnail, userUrl, rating, type}) => {

    return (
        <div className='card'>
            <div className='box'>
                <div className='thumbnail'>
                    <img className="image" src={thumbnail} alt={title} />
                </div>
                <h2 className='title'>
                    <a onClick={() => handleUrlClick(url)} style={{textDecoration: 'none'}}>
                        {title || 'N/A'}
                    </a>
                </h2>

                <div className='description'>
                    <div className='two-columns'>
                        {userThumbnail && <img className='user-thumbnail' src={userThumbnail} /> }
                        <span style={{alignSelf: 'center'}}>
                            <a onClick={() => handleUrlClick(userUrl)} style={{textDecoration: (user ? 'underline' : 'none')}}>
                                {user || 'N/A'}
                            </a>
                        </span>
                    </div>
                </div>
                <div className="two-columns">
                    <p className='description'>
                        Rated: <span className='rating'>{rating || 'N/A'}</span>
                    </p>
                    <p className='description'>
                        Type: <span className='rating'>{type || 'N/A'}</span>
                    </p>
                </div>
                <p className='description'>Did you perform an altruistic act today? Helping others makes you feel good 🐢💕</p>
            </div>
        </div>
    )
}

export default GifItem