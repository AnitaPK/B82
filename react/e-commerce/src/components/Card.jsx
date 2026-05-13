import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeProvider'
import { cartReducer , cartInitialState} from '../CART/cartReducer'
import { CartContext } from '../CART/CartProvider'


const Card = ({p}) => {

    const {theme} = useContext(ThemeContext)
    const{state,dispatch} = useContext(CartContext)

    console.log(state,"state in CARD ")
console.log(theme,"theme in card")
    return (
            <div 
            className={`card ${theme == 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
            
            style={{ width: "18rem" }}>
                <img src={p.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{p.title}</h5>
                    <p className="card-text">{p.description.slice(0, 50)}... </p>
                    <p>Price ₹ {p.price}</p>
                    <Link to={`/products/${p.id}`} className="btn btn-primary">Expore</Link>
                    <button className='btn btn-warning ms-2' 
                    onClick={()=>dispatch({type:"ADD_TO_CART", payload:{id:p.id, title:p.title, price:p.price}})}
                    >Add To Cart</button>
                </div>
        </div>
    )
}

export default Card