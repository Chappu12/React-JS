"use client"
import React, { useState } from 'react'
import Header from './Header';

const page = () => {
    const [a, setA] = useState(10);
    return (
        <>
            <Header />
            <div>I got {a} in MAth subject</div>
            <button onClick={() => {
                setA(20)
            }}>Update</button>
        </>
    )
}

export default page