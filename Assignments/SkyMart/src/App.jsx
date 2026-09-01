import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
