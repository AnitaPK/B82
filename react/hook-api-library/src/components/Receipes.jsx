import React, { useEffect, useState } from 'react'
import useAPI from '../customHook/useAPI'

const Receipes = () => {
    const [receipes,setReceipes] = useState([])

    const {dataFromAPI,loading,error} = useAPI("https://dummyjson.com/recipes")

     function fetchData(){
        const rc =  dataFromAPI?.recipes
        setReceipes(rc)
    }
    useEffect(()=>{
        fetchData()
    },[dataFromAPI])


console.log(dataFromAPI)
console.log(receipes)
  return (
    <>
    <div>Receipes</div>
    <ul>
        {receipes.map((r,i)=>(
            <li key={i}>
                {r.name}
            </li>
        ))}
    </ul>
    </>
  )
}

export default Receipes




// https://dummyjson.com/recipes