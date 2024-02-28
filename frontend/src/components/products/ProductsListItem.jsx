import PropTypes from 'prop-types'

function ProductsListItem ({product}) {
    const {name, description} = product.attributes
    return (
        <div className='card'>
            {/*
                <img src={imgUrl} />
    */}
            <div className='card-body'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductsListItem