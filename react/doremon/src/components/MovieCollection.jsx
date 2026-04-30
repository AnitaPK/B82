import React from 'react'
// import {movies, funFacts} from '../tributeData'
const MovieCollection = ({movies,funFacts}) => {
  return (
    <>
    <h3>MovieCollection</h3>
    <ul>
        {movies.map((m,i)=>(
            <li key={i}>{m}</li>
        ))}
    </ul>

<div>
    {funFacts.map((Q,i)=>(
        <p>{Q}</p>
    ))}
</div>

</>
  )
}

export default MovieCollection