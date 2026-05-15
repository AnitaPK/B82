import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useAPI = (initialURL) => {

    const [dataFromAPI,setDataFromAPI] = useState()
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState()

async function fetchAPI(){
    try {
    const res = await axios.get(initialURL)
        setDataFromAPI(res.data)
        setLoading(false)
    } catch (error) {
        setError(error)
        setLoading(false)
    }
}

useEffect(()=>{
    fetchAPI()
},[initialURL])


  return {dataFromAPI, loading, error}
}

export default useAPI