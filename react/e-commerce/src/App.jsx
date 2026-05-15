import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'
import CartProvider from './CART/CartProvider'
import AuthProvider from './Auth/AuthProvider'
import CartPage from './pages/CartPage'

function App() {

  return (
    // <AuthProvider></AuthProvider>
    <CartProvider>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>

        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/products/:ID' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
