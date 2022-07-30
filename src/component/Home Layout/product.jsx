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
        value: 2.5
    }
    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} />
                {/* <span>{`${product.numOfReviews} Reviews`}</span> */}
            </div>
            <span>{`${product.price}`}</span><br />
            <span>{`${product._id}`}</span>
        </Link>
    )
}

export default Product