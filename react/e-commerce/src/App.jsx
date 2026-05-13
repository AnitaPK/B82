import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'
import CartProvider from './CART/CartProvider'

function App() {

  return (
    <CartProvider>
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>

        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/products/:ID' element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
