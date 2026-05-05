import React from 'react'
import { products } from '../data'
import { Link, Outlet, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {ID} = useParams()
    console.log(ID,"IDIDIDIDIDIDIID")

    const productDetails = products.find((p)=>p.id == ID)
    console.log(productDetails,"productDetailsproductDetailsproductDetailsproductDetails")
  return (
    <>
    <div>ProductDetails</div>
    <h1>{productDetails.name}</h1>
    <p>{productDetails.description}</p>
    <h4>Price : <i>{productDetails.price}</i></h4>
    <Link to={`/product/${productDetails.id}/comments`}>Show Comments</Link>
    <Link to={`/product/${productDetails.id}/likes`}>Likes</Link>
    <hr />
<Outlet />
    </>
  )
}

export default ProductDetails