import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { ThemeContext } from '../theme/ThemeProvider';
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)


    return (
        <nav className={`navbar navbar-expand-lg ${theme == 'light' ? 'bg-body-tertiary' : 'bg-dark'} `}
        
            data-bs-theme={`${theme =='light' ? '' :  'dark'}`}
            data-bs-theme={`${theme =='dark' && 'dark'}`}

        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ShopNow</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/'>Home</Link>
                        </li>
                    </ul>
                    <div className="d-flex " role="search">
                        <button className="btn btn-outline-success" >Login</button>
                        <Link className="nav-link ms-3 bg-primary rounded-circle p-2" >
                        <FaCartArrowDown /> 
                        <sup 
                        // className='badge bg-danger'
                        >0</sup>
                        </Link>
                        <button style={{ border: "0px" }}
                        onClick={toggleTheme}
                        >
                           {theme == 'light' ?  <BsToggleOn /> :<BsToggleOff />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar