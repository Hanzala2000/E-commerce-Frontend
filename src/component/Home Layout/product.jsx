import React from 'react'
import './layout.css'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

function Product({ product }) {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        isHalf: true,
        value: product.ratings
    }
    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} />
                <span className='productCardSpan'>{`${product.numOfReviews} Reviews`}</span>
            </div>
            <span className='productCardSpan2'>{`Rs ${product.price}`}</span><br />
            <span className='productCardSpan'>{`${product._id}`}</span>
        </Link>
    )
}

export default Product