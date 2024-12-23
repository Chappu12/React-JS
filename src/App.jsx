import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'

const App = () => {

    const [name, setName] = useState("Prathamesh")
    const [counter, setCounter] = useState(0)
    const ele = <h1>MAD MAX</h1>
    const [first, setfirst] = useState("PPB")
    const [stock, setStock] = useState("not updated")
    const [username, setUserName] = useState()
    // useEffect(() => {
    //     setStock("updated"); // we must use useEffect outside the return jsx
    // })
    // const [flag, setflag] = useState(0)

    function handleNameChange(event){
        setUserName(event.target.value)
    }

    return (
        <>
            <div className='h-screen flex font-medium text-lg'>
                <p>Hi may I help you {name}!</p>
                <button onClick={() => {
                    setName("MAd")
                }}>Click me</button>
            </div>
        </>
    )
}

export default App