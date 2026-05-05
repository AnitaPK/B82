import React from 'react'
import { Link } from 'react-router-dom'
import {products} from '../data'
import Card from '../components/Card'

const Dashboard = () => {




  return (
    <>
    <div>Dashboard </div>
    <Link to='/login'>To To Login</Link>
    <div className="container">
        <div className="row">
            {products.map((prod,index)=>(
                <div className="col-12 col-md-3 mb-1" key={index}>
                    <Card product={prod} />
                </div>
            ))}
        </div>
    </div>
    </>

  )
}

export default Dashboard