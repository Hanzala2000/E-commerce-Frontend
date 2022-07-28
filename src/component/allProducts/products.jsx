import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Home Layout/loader'
import Product from '../Home Layout/product'
import { getProduct } from '../../store/action/productAction'
import './allpro.css'
function Products() {
    const { product } = useSelector(state => state.postReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <div className='allProMain'>
            <h2>Products</h2>
            <div className='products'>
                {product && product.map((v, i) => {
                    return <Product key={i} homeProducts={v} />
                })}
            </div>
        </div>
    )
}

export default Products

