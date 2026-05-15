import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Users from './components/Users'
import Fruits from './components/Fruits'
import Receipes from './components/Receipes'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Products />}></Route>
      <Route path='/users' element={<Users />}></Route>
      <Route path='/receipes' element={<Receipes />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
