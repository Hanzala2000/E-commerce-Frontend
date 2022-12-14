import React from 'react'
import './layout.css'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'

function Product({ product }) {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: 25,
        value: product.ratings,
        isHalf: true
    };

    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} />
                <span className='productCardSpan'>{`${product.numOfReviews} Reviews`}</span>
            </div>
            <span >{`Rs ${product.price}`}</span><br />
        </Link>
    )
}

export default Product