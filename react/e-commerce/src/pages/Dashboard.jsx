import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { ThemeContext } from '../theme/ThemeProvider'

const Dashboard = () => {
    const [products, setProducts] = useState([])
     const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { theme } = useContext(ThemeContext)


    // SEARCH + FILTER STATES
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [rating, setRating] = useState('')
    const [stock, setStock] = useState('')

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

// FILTER LOGIC
    useEffect(() => {

        let temp = [...products]

        // SEARCH
        if (search) {
            temp = temp.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.description.toLowerCase().includes(search.toLowerCase())
            )
        }

        // CATEGORY
        if (category) {
            temp = temp.filter((p) =>
                p.category.toLowerCase() === category.toLowerCase()
            )
        }

        // BRAND
        if (brand) {
            temp = temp.filter((p) =>
                p.brand?.toLowerCase().includes(brand.toLowerCase())
            )
        }

        // MIN PRICE
        if (minPrice) {
            temp = temp.filter((p) => p.price >= Number(minPrice))
        }

        // MAX PRICE
        if (maxPrice) {
            temp = temp.filter((p) => p.price <= Number(maxPrice))
        }

        // RATING
        if (rating) {
            temp = temp.filter((p) => p.rating >= Number(rating))
        }

        // STOCK
        if (stock === 'instock') {
            temp = temp.filter((p) => p.stock > 0)
        }

        if (stock === 'outstock') {
            temp = temp.filter((p) => p.stock === 0)
        }

        setFilteredProducts(temp)

    }, [search, category, brand, minPrice, maxPrice, rating, stock, products])



    // UNIQUE CATEGORIES
    const categories = [...new Set(products.map((p) => p.category))]


    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 sticky-top overflow-hidden vh-100" style={{ backgroundColor: "#dddddd" }}>
                       <h3 className="mb-4">Filters</h3>

                        {/* SEARCH */}
                        <div className="mb-3">
                            <label>Search Product</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* CATEGORY */}
                        <div className="mb-3">
                            <label>Category</label>

                            <select
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">All</option>

                                {
                                    categories.map((c, i) => (
                                        <option key={i} value={c}>
                                            {c}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* BRAND */}
                        <div className="mb-3">
                            <label>Brand</label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </div>

                        {/* PRICE */}
                        <div className="mb-3">
                            <label>Min Price</label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Max Price</label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>

                        {/* RATING */}
                        <div className="mb-3">
                            <label>Minimum Rating</label>

                            <select
                                className="form-select"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                            </select>
                        </div>

                        {/* STOCK */}
                        <div className="mb-3">
                            <label>Stock</label>

                            <select
                                className="form-select"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="instock">In Stock</option>
                                <option value="outstock">Out Of Stock</option>
                            </select>
                        </div>

                        {/* RESET */}
                        <button
                            className="btn btn-danger w-100"
                            onClick={() => {
                                setSearch('')
                                setCategory('')
                                setBrand('')
                                setMinPrice('')
                                setMaxPrice('')
                                setRating('')
                                setStock('')
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                    <div className='col-10'>
                     <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>Product List</h2>

                            <h5>
                                Total Products :
                                <span className="text-primary">
                                    {' '} {filteredProducts.length}
                                </span>
                            </h5>
                        </div>

                        {
                            loading &&
                            <h1 className="text-center">Loading...</h1>
                        }

                        {
                            error &&
                            <h1 className="text-danger">
                                Something Went Wrong
                            </h1>
                        }

                        <div className="container">
                            <div className="row g-4">

                                {
                                    filteredProducts.length > 0 ?

                                        filteredProducts.map((p, i) => (
                                            <div
                                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                                                key={i}
                                            >
                                                <Card p={p} />
                                            </div>
                                        ))

                                        :

                                        <h2>No Products Found</h2>
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