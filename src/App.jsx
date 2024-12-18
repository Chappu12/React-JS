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
        // <>
        //     <div className='main'>
        //         {ele}
        //         <div>Hi my name is {name}</div>
        //         <button className='btn' onClick={() => {
        //             setName((name) => name === "Prathamesh" ? "Developer" : "Prathamesh")
        //             // if(flag == 0){
        //             //     setName("Developer")
        //             //     setflag(1)
        //             // }
        //             // else{
        //             //     setName("Prathamesh")
        //             //     setflag(0)
        //             // }
        //         }}>Click me</button>
        //         <div className='count'>
        //             <p>Counter : {counter}</p>
        //             <button className="btn" onClick={() => {
        //                 if (counter >= 20) {
        //                     alert("not allowed")
        //                 }
        //                 else {
        //                     setCounter(counter + 1)
        //                 }
        //             }}>
        //                 Increment
        //             </button>
        //             <button className="btn" onClick={() => {
        //                 if (counter <= 0) {
        //                     alert("Less than 0 not allowed")
        //                 }
        //                 else {
        //                     setCounter(counter - 1)
        //                 }
        //             }}>Decrement</button>
        //         </div>
        //         <div>
        //             <p>My name is {first}</p>
        //             <button className="btn" onClick={() => {
        //                 setfirst("Prathamesh Pramod Bhavsar")
        //             }}>Change</button>
        //         </div>
        //         <div>
        //             {
        //                 stock
        //             }
        //             <button onClick={() => {
        //                 setStock('updated')
        //             }}>Update the stock</button>
        //         </div>
        //         <div>
        //             <dl>
        //                 <dt>User Name</dt>
        //                     <dd>
        //                         <input type="text" onChange={handleNameChange}/>
        //                     </dd>
        //             </dl>
        //             <p>Hello ! {username}</p>
        //         </div>
            // </div>
        // </>
        <>
            <div className='h-screen flex place-content-center text-4xl'>
                hi 
            </div>
        </>
    )
}

export default App