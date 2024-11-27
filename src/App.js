'use client'
import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [name, setName] = useState("Prathamesh")
    return (
        <>
            <div>Hi my name is {name}</div>
            <button onClick={() => {
              setName("Developer")
            }}>Click me</button>
        </>
    )
}

export default App