import React, { useEffect, useState } from 'react'
import useAPI from '../customHook/useAPI'

const Products = () => {
    const [prods, setProds] = useState([])
    const { dataFromAPI, error, loading } = useAPI("https://fakestoreapi.com/products")
    console.log(dataFromAPI)

    useEffect(() => {
        setProds(dataFromAPI)
    }, [dataFromAPI])

    return (
        <>
            <div>Products</div>
            <ul>
                {prods?.map((p) => (
                    <li >{p.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Products
