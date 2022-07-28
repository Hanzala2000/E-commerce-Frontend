import React from 'react'
import './layout.css'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'

function Product({homeProducts}) {
    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:22,
        isHalf: true,
        value:2.5
    }
    return (
        <Link className='productMain' to={`/product/${homeProducts._id}`}>
            <img style={{width:"200px",height:"250px"}} src={homeProducts.images[0].url} alt="" />
            <h3>{homeProducts.name}</h3>
            <div style={{display:"flex",alignItems:"center",padding:"3px"}}>
            <ReactStars {...options} />
            <span style={{fontSize:12,padding:"2px"}}>{`${homeProducts.numOfReviews} Reviews`}</span>
            </div>
            <h4>{`Rs ${homeProducts.price}`}</h4>
        </Link>
    )
}

export default Product