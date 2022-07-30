import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import './layout.css'
import Product from './product'
import MetaData from './metaData'
import { getProduct } from '../../store/action/productAction'
import { useDispatch, useSelector } from "react-redux"
import Loader from './loader'

function Main() {
    const products = {
        name: "Blue Shirt",
        images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
        price: "$100",
        _id: "Hanzala"
    }
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const { error, productsCount, product, isLoading } = useSelector(state => state.productReducer)
    return (
        <Fragment>
            <MetaData title="E-Commerce - Home" />
            <div className='banner'>
                <p>Welcome To E-Commerce</p>
                <h1>Find Amazing Products Below</h1>
                <a href="#container"><button>Scroll</button></a>
            </div>
            <h2 className='homeHeading'>Featured Products</h2>
            <div className="container" id='container'>
                <Product product={products} />
                <Product product={products} />
                <Product product={products} />
                <Product product={products} />
                <Product product={products} />
                <Product product={products} />
                <Product product={products} />
                <Product product={products} />
                {/* //                 {product && product.map((product, i) => {
        //                 })} */}
            </div>
        </Fragment>
    )
}

export default Main
