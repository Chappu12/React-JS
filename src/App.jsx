import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

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
            <div className='h-screen flex align-middle justify-center font-medium text-lg'>
                Hi may I help you!
            </div>
        </>
    )
}

export default App