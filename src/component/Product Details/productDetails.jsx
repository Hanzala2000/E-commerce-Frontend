import React, { Fragment, useEffect } from "react";
import './proDetails.css'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../store/action/productAction";
import ReviewCard from './reviewCard'
function ProductDetails() {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: 22,
        isHalf: true,
        value: 2.5
    }
    let { id } = useParams()
    const dispatch = useDispatch()
    const { oneProduct } = useSelector(state => state.postDetailReducer)
    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch])
    return (
        <Fragment>
            <div className="detailsBlocks">
                <div>
                    {
                        oneProduct.images && oneProduct.images.map((v, i) => {
                            return (
                                <div key={i}>
                                    <img className="oneProPic" src={v.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div className="detailsBlock-1">
                        <h3>{oneProduct.name}</h3>
                        <h5>Product # {oneProduct._id}</h5>
                    </div>
                    <div className="detailsBlock-2">
                        <ReactStars {...options} />
                        <h6>({oneProduct.numOfReviews}Reviews)</h6>
                    </div>
                    <div className="detailsBlock-3">
                        <h2>{`Rs ${oneProduct.price}`}</h2>
                        <div className="detailsBlock-3-1">
                            <div className="detailsBlock-3-1-1">
                                <button>-</button>
                                <input type="number" value="1" />
                                <button>+</button>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                        <p>Status: <b className={oneProduct.stock < 1 ? "redColor" : "greenColor"}>{oneProduct.stock < 1 ? "Out Of Stock" : "In Stock"}</b></p>
                    </div>
                    <div className="detailsBlock-4">
                        <p>Description : {oneProduct.description}</p>
                    </div>
                </div>
            </div>
            {oneProduct.reviews && oneProduct.reviews[0] ? (
                    <div className="reviews">
                        {oneProduct.reviews.map((review)=> <ReviewCard review={review}/>)}
                    </div>
                ):
                <p>No Reviews Yet</p>
            }
        </Fragment>
    )
}
export default ProductDetails