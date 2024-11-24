"use client";
import React, { useState } from 'react'
import Header from "@/Components/Header"

const page = () => {
    const [marks, setfirst] = useState(85);

    return (
        <>
            <Header/>
            <div id="main">I scored {marks} in Maths</div>
            <button id="btn" onClick={() => {
                setfirst(90);
            }}>Click me</button>
        </>
    )
}

export default page