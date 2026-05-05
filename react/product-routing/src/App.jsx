import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Comments from './components/Comments';
import Likes from './components/Likes'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/product/:ID' element={<ProductDetails />}>
          <Route path='comments' element={<Comments />}></Route>
          <Route path='likes' element={<Likes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


          // http://localhot:5174/product/3/likes

