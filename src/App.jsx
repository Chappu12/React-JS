import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
    // const Home = () => <h1>Home Page</h1>;
    // const Product = () => <h1>Product Page</h1>;
    // const About = () => <h1>About Page</h1>;
    // const SignUp = () => <h1>Sign Up Page</h1>;
    const [name, setName] = useState("Prathamesh")
    const [counter, setCounter] = useState(0)
    const ele = <h1>MAD MAX</h1>
    const [first, setfirst] = useState("PPB")
    const [stock, setStock] = useState("not updated")
    // useEffect(() => {
    //     setStock("updated"); // we must use useEffect outside the return jsx
    // })
    // const [flag, setflag] = useState(0)
    return (
        <>
            {/* <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router> */}
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
                        if (counter >= 20) {
                            alert("not allowed")
                        }
                        else {
                            setCounter(counter + 1)
                        }
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
                <div>
                    <p>My name is {first}</p>
                    <button className="btn" onClick={() => {
                        setfirst("Prathamesh Pramod Bhavsar")
                    }}>Change</button>
                </div>
                <div>
                    {
                        stock
                    }
                    <button onClick={() => {
                        setStock('updated')
                    }}>Update</button>
                </div>
            </div>
        </>
    )
}

export default App