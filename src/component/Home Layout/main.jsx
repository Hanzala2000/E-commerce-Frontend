import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import './layout.css'
import Product from './product'
import MetaData from './metaData'
import { getProduct } from '../../store/action/productAction'
import { useDispatch, useSelector } from "react-redux"
import Loader from './loader'
import { useAlert } from 'react-alert'

function Main() {
    const alert = useAlert()
    let dispatch = useDispatch()

    const { error, productsCount, product, isLoading } = useSelector(state => state.productReducer)
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProduct())
    }, [dispatch, error,alert])
    return (
        <Fragment>
            {isLoading ? <Loader /> : <Fragment>
                <MetaData title="E-Commerce - Home" />
                <div className='banner'>
                    <p>Welcome To E-Commerce</p>
                    <h1>Find Amazing Products Below</h1>
                    <a href="#container"><button>Scroll</button></a>
                </div>
                <h2 className='homeHeading'>Featured Products</h2>
                <div className="container" id='container'>
                    {product && product.map((item, i) => {
                        return <Product key={item._id} product={item} />
                    })}
                </div>
            </Fragment>}

        </Fragment>

    )
}

export default Main
