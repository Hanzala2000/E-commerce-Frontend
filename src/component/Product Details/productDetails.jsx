import React, { Fragment, useEffect } from "react";
import "./proDetails.css";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../store/action/productAction";
import ReviewCard from "./reviewCard";
import Loader from "../Home Layout/loader";
import Carousel from "react-material-ui-carousel";
import { Rating } from "@material-ui/lab";
import MetaData from "../Home Layout/metaData";
function  ProductDetails  () {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch]);
  const { product, loading, error } = useSelector(
    (state) => state.productDetailReducer
  );
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 25,
    value: product.ratings,
    isHalf: true
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="ProductDetails">
          <Carousel>
            {product.images &&
              product.images.map((item, i) => {
                return (
                  <div key={item.url}>
                    <center>
                      {" "}
                      <img
                        className="CarouselImage"
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    </center>
                  </div>
                );
              })}
          </Carousel>

          <div>
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
            </div>
            <div className="detailsBlock-2">
              <ReactStars {...options} />
              <span>({product.numOfReviews}Reviews)</span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`Rs ${product.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
                <button>Add To Cart</button>
              </div>
              <p>
                Status:{" "}
                <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                  {product.stock < 1 ? "Out Of Stock" : "In Stock"}
                </b>
              </p>
            </div>
            <div className="detailsBlock-4">
              <p>Description : {product.description}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default ProductDetails;
