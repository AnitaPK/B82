import React, { useState } from 'react'
import useAPI from '../customHook/useAPI'

const Fruits = () => {
    const [fruits,setFruits] = useState([])


    const {dataFromAPI,loading,error} = useAPI("https://www.fruityvice.com/api/fruit/all")

    console.log("dataFromAPI in Fruits",dataFromAPI)

  return (
    <div>Fruits</div>
  )
}

export default Fruits