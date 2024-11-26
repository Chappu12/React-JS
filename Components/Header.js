import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className="header">
                <div id="logo">
                    <h1>LOGO</h1>
                </div>
                <div>
                    <ul className="navv">
                        <Link href="/About">About </Link>
                        <Link href="/Menu">Menu </Link>
                        <Link href="/Products">Products </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header