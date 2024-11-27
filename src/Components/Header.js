import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div>
                    LOGO
                </div>
                <div>
                    <ul className='nav-menu'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Product</li>
                        <li>Sign up</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header