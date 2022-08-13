import React from 'react'
import ReactStars from 'react-rating-stars-component'
import './proDetails.css'

const ReviewCard = ({reviewItem}) => {
    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth ? 600 < 20 : 25,
        isHalf: true,
        value:reviewItem.rating
    }
    return (
        <div className='reviewCard'>
            <img src="data:image/jpeg;base64,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"  alt="user" />
            <p>{reviewItem.name}</p>
            <ReactStars {...options} />
            <span className='reviewCardComment'>{reviewItem.comment}</span>
        </div>
    )
}

export default ReviewCard