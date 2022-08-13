import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Home Layout/loader'
import Product from '../Home Layout/product'
import { getProduct, clearErrors } from '../../store/action/productAction'
import { useAlert } from 'react-alert'
import MetaData from "../Home Layout/metaData";
import './allpro.css'
import { useParams } from 'react-router-dom'

function Products() {
  const params  = useParams()
  let keyword = params.keyword
    const { product, isLoading, error, productsCount } = useSelector(state => state.productReducer)
    const dispatch = useDispatch()
    const alert = useAlert()
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProduct(keyword))
    }, [dispatch, alert, error,keyword])
    return (
        <Fragment>
            <MetaData title="Products" />
            <h2 className='productsHeading'>Products</h2>
            {isLoading ? <Loader /> :
                <div className='products'>
                    {product && product.map((product, i) => {
                        return <Product key={product._id} product={product} />
                    })}
                </div>
            }

        </Fragment>
    )
}

export default Products

