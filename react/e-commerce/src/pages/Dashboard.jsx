import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function fetchData() {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            console.log(data)
            setProducts(data.products)
        } catch (err) {
            setError(true)
            console.log(err)
        } finally {
            setLoading(false)
        }
    }


    // async function fetchDataAxios(){
    //     try {
    //         const res = await axios.get('https://dummyjson.com/products',{})
    //         setProducts(res.data.products)
    //     } catch (err) {
    //          setError(true)
    //         console.log(err)
    //     }finally{
    //         setLoading(false)

    //     }
    // }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(products)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 bg-secondary"></div>
                    <div className="col-10">
                        <div>Product List </div>
                        <div className="container">
                            <div className="row">
                                {
                                    products.map((p, i) => (
                                        <div className="col-12 col-md-3" key={i}>
                                            <div className="card" style={{width: "18rem"}}>
                                                <img src={p.thumbnail} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary">{p.title}</h5>
                                                        <p className="card-text">{p.description.slice(0,50)}... </p>
                                                        <p>Price ₹ {p.price}</p>
                                                        <Link to={`/product/${p.id}`} className="btn btn-primary">Expore</Link>
                                                        <button className='btn btn-warning'>Add To Cart</button>
                                                    </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Dashboard