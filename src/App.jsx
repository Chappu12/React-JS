'use client'
import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    const [name, setName] = useState("Prathamesh")
    const [flag, setflag] = useState(0)
    return (
        <>
            <div className='main'>
                <div>Hi my name is {name}</div>
                <button className='btn' onClick={() => {
                    setName((name) => name === "Prathamesh" ? "Developer" : "Prathamesh")

                    // if(flag == 0){
                    //     setName("Developer")
                    //     setflag(1)
                    // }
                    // else{
                    //     setName("Prathamesh")
                    //     setflag(0)
                    // }
                }}>Click me</button>
            </div>
        </>
    )
}

export default App


