import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeProvider'


const Card = ({p}) => {

    const {theme} = useContext(ThemeContext)

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
                    <Link to={`/product/${p.id}`} className="btn btn-primary">Expore</Link>
                    <button className='btn btn-warning ms-2'>Add To Cart</button>
                </div>
        </div>
    )
}

export default Card