import PropTypes from 'prop-types'

function ArtisansListItem({ artisan }){
    const {name, slug, description, img} = artisan.attributes
    const imgUrl = 'http://localhost:1337' + img?.data?.attributes?.url;
    return (
        <><a className='card' href={`/artisans/${slug}`}>
            <img src={imgUrl} className='picture-author' />
            <div className='card-body'>
                <h3>{name}</h3>
                <p>{description}</p>
                </div>
        </a>
        </>
    )
}

ArtisansListItem.propTypes = {
    artisan : PropTypes.object
}

export default ArtisansListItem