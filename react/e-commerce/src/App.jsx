import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/products/:ID' element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
