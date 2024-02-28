import PropTypes from 'prop-types'
import './Artisan.css'

function ArtisanHeader ({ attributes }) {
  const imgUrl = `${process.env.REACT_APP_BASE_URL}` + attributes.img?.data?.attributes?.url

  return (
    <div className='artisan-header'>
      <div className='left-side'>
        <img src={imgUrl} className='artisan-picture' />
      </div>
      <div className='right-side'>
        <h1>{attributes.name}</h1>
        <p>{attributes.description}</p>
      </div>
    </div>
  )
}

ArtisanHeader.propTypes = {
  attributes: PropTypes.object
}

export default ArtisanHeader
