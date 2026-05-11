import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { ThemeContext } from '../theme/ThemeProvider'

const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { theme } = useContext(ThemeContext)

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
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 sticky-top overflow-hidden vh-100" style={{ backgroundColor: "#dddddd" }}>
                        <input />
                        <button>Search</button>
                    </div>
                    <div className={`col-10 ${theme == 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'} `}>
                        <div>Product List </div>
                        <div className="container">
                            <div className="row">
                                {
                                    products.map((p, i) => (
                                        <div className="col-12 col-md-3" key={i}>
                                            <Card p={p} />
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