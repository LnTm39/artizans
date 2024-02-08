import PropTypes from 'prop-types'
import ArtisansListItem from './ArtisansListItem'
import './ArtisansList.css'

function ArtisansList({ artisans }){
    if (!artisans || artisans.length < 1){
        console.log(artisans)
        return 'No data'
    }
    return(
        <div className='list-container'>
        <h2>ArtisansList </h2>
        <div className='list'>
        {
            artisans.map(artisan => (
                <ArtisansListItem key={artisan.id} artisan={artisan} />
            ))
        } 
        </div>
        </div>
    )
}

ArtisansList.propType = {
    artisans: PropTypes.arrayOf(PropTypes.object)
}

export default ArtisansList