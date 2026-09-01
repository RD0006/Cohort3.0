import { useState, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { MyStore } from './context/MyContext'
import axios from "axios";


let App = () => {
  let {count, setCount} = useContext(MyStore);
  
  const [toggle, setToggle] = useState(false);
  
  const [apiData, setApiData] = useState(null);
  
  console.log(apiData);

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    setApiData(res.data);
    // recursion without useEffect 
  }

  useEffect(() => {
    getData();
  }, [])
  

  // hook that takes 2 parameters - callback function, blank array
  // asynchronous 
  useEffect(() => {console.log("App rendering...")}, [toggle])
  // [] -> dependency array

  return (
    <div>
      <h1>Hey - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br/>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <Home />

      {toggle ? <About /> : <Contact />}
      {
      // mounting and unmounting phases
      }
      {
      //<About />
      //<Contact />
      }
    </div>
  )
}

export default App