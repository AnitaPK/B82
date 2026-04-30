import React from 'react'
import hederIMG from '../assets/doremon-header.webp'
import './Gallery.css'
const Gallery = () => {
  return (
    <>
    <h3>Gallery</h3>
     <div className='cont'>
        <div><img src={hederIMG} alt="" /></div>
        <div><img src={hederIMG} alt="" /></div>

     </div>
     
     </>
  )
}

export default Gallery