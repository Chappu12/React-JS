'use client'
import React, { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

const App = () => {
    const [name, setName] = useState("Prathamesh")
    const [counter, setCounter] = useState(0)
    const ele = <h1>MAD MAX</h1>
    // const [flag, setflag] = useState(0)
    return (
        <>
            <div className='main'>
                {ele}
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
                <div className='count'>
                    <p>Counter : {counter}</p>
                    <button className="btn" onClick={() => {
                        setCounter(counter + 1)
                    }}>
                        Increment
                    </button>
                    <button className="btn" onClick={() => {
                        if (counter <= 0) {
                            alert("Less than 0 not allowed")
                        }
                        else {
                            setCounter(counter - 1)
                        }
                    }}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default App