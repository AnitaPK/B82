import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeProvider'
import './ProductDetails.css'

const ProductDetails = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { theme } = useContext(ThemeContext)

  const { ID } = useParams()
  const navigate = useNavigate()

  async function fetchData() {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()

      const p = data.products.find((e) => e.id == ID)

      setProduct(p)
    } catch (err) {
      setError(true)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleAddToCart() {
    alert(`${product.title} added to cart`)
  }

  if (loading) {
    return <h1 className="loading">Loading...</h1>
  }

  if (error) {
    return <h1 className="error">Something Went Wrong</h1>
  }

  return (
    <div
      className={`product-page ${
        theme === 'dark' ? 'dark-theme' : ''
      }`}
    >
      <Link className="back-btn" to="/dashboard">
        ← Back
      </Link>

      <div className="product-container">
        {/* LEFT */}
        <div className="image-section">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="main-image"
          />

          <div className="image-gallery">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt="" className="small-image" />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="details-section">
          <span className="category">{product.category}</span>

          <h1>{product.title}</h1>

          <h2 className="price">${product.price}</h2>

          <p className="description">{product.description}</p>

          <div className="info-grid">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <p>
              <strong>Discount:</strong>{' '}
              {product.discountPercentage}%
            </p>

            <p>
              <strong>SKU:</strong> {product.sku}
            </p>

            <p>
              <strong>Status:</strong>{' '}
              {product.availabilityStatus}
            </p>
          </div>

          <div className="dimensions">
            <h3>Dimensions</h3>

            <p>Width: {product.dimensions.width}</p>
            <p>Height: {product.dimensions.height}</p>
            <p>Depth: {product.dimensions.depth}</p>
          </div>

          <div className="tags">
            {product.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="button-group">
            <button
              className="cart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>

        {product.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h4>{review.reviewerName}</h4>

            <p>⭐ {review.rating}</p>

            <p>{review.comment}</p>

            <small>
              {new Date(review.date).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails