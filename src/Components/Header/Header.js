import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div>
                    LOGO
                </div>
                <div>
                <ul className='nav-menu'>
                        <li>
                            Home
                            {/* <Link to="/">Home</Link> */}
                        </li>
                        <li>
                            Product
                            {/* <Link to="/product">Product</Link> */}
                        </li>
                        <li>
                            About
                            {/* <Link to="/about">About</Link> */}
                        </li>
                        <li>
                            Sign Up
                            {/* <Link to="/signup">Sign Up</Link> */}
                        </li>
                    </ul> 
                </div>
            </nav>
        </>
    )
}

export default Header