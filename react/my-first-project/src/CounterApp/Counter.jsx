import React, { useEffect, useMemo, useRef, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)
    const prevValueOfCount = useRef()
    const [coin,setCoin] = useState(101)

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

    useEffect(()=>{
      prevValueOfCount.current = count
    },[count])
    function changeUseRefValue (){
      console.log(prevValueOfCount.current + 5)
    }


    function expensiveCals(coin){
      for(let i = 1;i<=10000000;i++){

      }
      return coin *2
    }

    const resultOfExpCals = useMemo(()=>{
      return expensiveCals(coin)
    },[coin])

  return (
    <div style={{height:"300px", backgroundColor:'lightblue',color:'blue', textAlign:'center'}}>

    <h2>Count : {count}</h2>
    <h3>Preveous COunt : {prevValueOfCount.current}</h3>
    <button onClick={()=>setCount(count+1)}>INCREAMENT</button>
    <button onClick={()=>handleIncreament()}>INCREAMENT BY FUNCTION</button>
    <button onClick={handleDecreament}>DECREAMENT</button>
    <br />
    <button onClick={()=>changeUseRefValue()}>Change use Ref Value</button>
    <hr />

    <div>
      <h2>COIN : {coin}</h2>
      <h3>resultOfExpCals :{resultOfExpCals}</h3>
    <button onClick={()=>setCoin(coin+1)}>INCREAMENT COIN</button>
      
    </div>
    <div >Counter</div>
    {/* <h3>{countVariable}</h3>
    <button onClick={()=>increameentVariable()}>Increament</button> */}
</div>
  )
}

export default Counter