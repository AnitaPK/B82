import React from 'react'
import './CharsInDoremon.css'
import {mainCharacters} from '../tributeData.js'

const CharsInDoremon = () => {
  return (
    <div >
        <h3>Characters </h3>
        <div className="container1">

        {mainCharacters.map((char,i)=>(
             <div className="character" key={i}>
                <h4>{char.name}</h4>
                <h6>{char.role}</h6>
                <ul>
                    {char.traits.map((t,i)=>(
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            </div>
        ))}




      
        </div>


    </div>
  )
}

export default CharsInDoremon