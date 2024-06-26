import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './Footer/Footer'
import Login from './components/Login/Login'


const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App