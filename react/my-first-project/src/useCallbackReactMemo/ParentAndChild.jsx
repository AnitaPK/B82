import React, { useCallback, useState } from 'react'

const Child =React.memo(({fruitItem})=>{
    console.log("This is child console")
    return (
        <h1>Child Component</h1>
    )
})



const ParentAndChild = () => {
    const [x,setX] = useState(100001)
    // const fruitItem = ["Apple","Orange"]

    const fruitItem = useCallback(()=>{
        return ["Apple","Orange"]
    },[])

  return (

    <div style={{height:"300px"}}>
    <Child fruitItem = {fruitItem} />
    <div>Parent</div>
    <h3>X : {x}</h3>
    <button onClick={()=>setX(x+1)}>Increament X</button>
    </div>
  )
}

export default ParentAndChild