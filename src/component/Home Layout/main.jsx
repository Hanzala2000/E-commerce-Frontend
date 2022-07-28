import React from 'react'
import { useState, useEffect } from 'react'
import './layout.css'
import Product from './product'
import MetaData from './metaData'
import {getProduct} from '../../store/action/productAction'
import { useDispatch, useSelector } from "react-redux"
import Loader from './loader'

function Main() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    const { product, isLoading } = useSelector(state => state.postReducer)
    return (
        <div>
            {
                isLoading ? <Loader/> : <div className='main'>
                    <MetaData title="Ecommerce" />
                    <u><h3 className='feature'>Featured Products</h3></u>
                    <div className="container">
                        {product && product.map((v, i) => {
                            return <Product key={i} homeProducts={v} />
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default Main
