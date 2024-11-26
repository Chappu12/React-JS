"use client"
import axios from 'axios';
import React, { useState } from 'react'

const page = () => {
    const [user, setUser] = useState("Prathamesh");

    return (
        <>
            <h1>HI welcome to my page</h1>
            <button className='btn'>Get Image</button>
            <div>

            </div>
        </>
    )
}

export default page