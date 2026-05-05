import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)

    function handleIncreament(){
        // setCount(count+1)
        setCount(prevCount => prevCount + 1)
    }
    const handleDecreament = ()=>{
        setCount(count-1)
    }
    // let countVariable = 0
    // function increameentVariable(){
    //     console.log(countVariable,"Before")
    //     countVariable =  countVariable+1
    //     console.log(countVariable,"After")
    // }

  return (
    <div style={{height:"300px", backgroundColor:'lightblue',color:'blue', textAlign:'center'}}>

    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>INCREAMENT</button>
    <button onClick={()=>handleIncreament()}>INCREAMENT BY FUNCTION</button>
    <button onClick={handleDecreament}>DECREAMENT</button>
    <hr />
    <div >Counter</div>
    {/* <h3>{countVariable}</h3>
    <button onClick={()=>increameentVariable()}>Increament</button> */}
</div>
  )
}

export default Counter