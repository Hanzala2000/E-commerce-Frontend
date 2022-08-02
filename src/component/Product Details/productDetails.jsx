import React, { Fragment, useEffect } from "react";
import './proDetails.css'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../store/action/productAction";
import ReviewCard from './reviewCard'
import Loader from '../Home Layout/loader'
import Carousel from "react-material-ui-carousel";
import { Rating } from "@material-ui/lab";
import MetaData from '../Home Layout/metaData'
function ProductDetails() {

    let { id } = useParams()
    const dispatch = useDispatch()
    const { product, isLoading, error } = useSelector(state => state.productDetailReducer)
    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    }
    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch])

    return (

        <Fragment>
            {isLoading ? <Loader /> :
                <div className="ProductDetails">
                    <div>
                        <Carousel>
                            {
                                product.images && product.images.map((item, i) => {
                                    return (
                                        <div key={item.url}>
                                            <img className="CarouselImage" src={item.url} alt={`${i} Slide`} />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div>
                        <div className="detailsBlock-1">
                            <h3>{product.name}</h3>
                            <h5>Product # {product._id}</h5>
                        </div>
                        <div className="detailsBlock-2">
                            <Rating {...options} />
                            <h6>({product.numOfReviews}Reviews)</h6>
                        </div>
                        <div className="detailsBlock-3">
                            <h2>{`Rs ${product.price}`}</h2>
                            <div className="detailsBlock-3-1">
                                <div className="detailsBlock-3-1-1">
                                    <button>-</button>
                                    <input type="number" value="1" />
                                    <button>+</button>
                                </div>
                                <button>Add To Cart</button>
                            </div>
                            <p>Status: <b className={product.stock < 1 ? "redColor" : "greenColor"}>{product.stock < 1 ? "Out Of Stock" : "In Stock"}</b></p>
                        </div>
                        <div className="detailsBlock-4">
                            <p>Description : {product.description}</p>
                        </div>
                    </div>
                </div>
            }
        </Fragment >
    )
}
export default ProductDetails