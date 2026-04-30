import React from 'react'
import {doraemonTribute} from '../data.js'

const Info = () => {
  return (
    <>
    <div>Info</div>
    <h3>Creater : <i>{doraemonTribute.creator}</i></h3>
    <p>{doraemonTribute.description}</p>
    <h2>{doraemonTribute.famousQuote}</h2>

    </>
  )
}

export default Info