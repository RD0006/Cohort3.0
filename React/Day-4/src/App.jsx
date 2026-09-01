import React, { useState } from 'react';
import Contact from './components/Contact';

import something, { one, two } from './test';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  // one();
  // two();
  // something();

  /*
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
  */

  let [count, setCount] = useState(0);

  let [flag, setFlag] = useState(true);
  console.log(flag);


  // console.log("Hey!");

  // [ state is actual_value, set_state is function that updates state and re-renders parent --- closure plus HOF]

  // let count = 10;
  // console.log(count);


  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        // console.log("Hello!");
        // count++;
        // App();

        }}>
        Increment
      </button>

      <button onClick={() => {
        setFlag(false);
      }}>
        Change Flag
      </button>
    </div>
  )

}

export default App
