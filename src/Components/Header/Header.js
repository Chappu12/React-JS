import React from 'react'
// import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className='bg-purple-600 text-white'>
                {/* <span className=''>
                    LOGO
                </span> */}
                <ul className='p-2 flex justify-end text-base font-medium'>
                    <li className='nav-list'>
                        Home
                        {/* <Link to="/">Home</Link> */}
                    </li>
                    <li className='nav-list'>
                        Product
                        {/* <Link to="/product">Product</Link> */}
                    </li>
                    <li className='nav-list'>
                        About
                        {/* <Link to="/about">About</Link> */}
                    </li>
                    <li className='nav-list'>
                        Sign Up
                        {/* <Link to="/signup">Sign Up</Link> */}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header