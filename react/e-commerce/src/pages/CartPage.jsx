import React, { useContext } from 'react'
import { CartContext } from '../CART/CartProvider'
import './CartPage.css'

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext)

    return (
        <div className="cart-container">
            <h1 className="cart-title">🛒 My Cart</h1>

            <div className="cart-card">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {state.cart.map((p, i) => (
                            <tr key={i}>
                                <td>
                                    <div className="product-info">
                                        <span className="product-name">
                                            {p.productNAME}
                                        </span>

                                        <div className="qty-box">
                                            <button className="qty-btn">-</button>

                                            <b>{p.productQuantity}</b>

                                            <button className="qty-btn">+</button>
                                        </div>
                                    </div>
                                </td>

                                <td className="price">
                                    ₹{p.productPRICE}
                                </td>

                                <td>
                                    <button className="remove-btn">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="summary-box">
                    <p>
                        Delivery Charges :
                        <span> ₹{state.deliveryCharges}</span>
                    </p>

                    <p>
                        Platform Fee :
                        <span> ₹{state.platformFee}</span>
                    </p>

                    <h2>
                        Total Amount :
                        <span> ₹{state.totalAmount}</span>
                    </h2>

                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage