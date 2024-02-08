import PropTypes from 'prop-types'

function ArtisansListItem({ artisan }){
    const {name, description, img} = artisan.attributes
    const imgUrl = 'http://localhost:1337' + img?.data?.attributes?.url
    return (
        <div className='card'>
            <div className='card-author'>
                <img src={imgUrl} className='picture-author'/>
                <h3>{name}</h3>
            </div>
            <p>{description}</p>
        </div>
    )
}

ArtisansListItem.propTypes = {
    artisan : PropTypes.object
}

export default ArtisansListItem