import React, { useReducer } from 'react'
const initialCoinState ={coin:0,level:1}
// {coin:0,level:2}

function coinReducer(state, action){
    switch (action.type){
        case "COLLECT_COIN":{
            return {...state, coin: state.coin + 1, level:state.level}
        }
        case "LOSE_COIN":{
            return {...state,coin: state.coin - 1,level:state.level}
        }
        case "RESET":{
            return {coin:0}
        }
        case "LEVEL_UP":{
            if(state.coin >=10){
                return {...state, coin:0, level:state.level+1}
            }else{
                return state
            }
        }
        default:
            return state
    }

}

const CoinCollector = () => {
    const [state, dispatch] = useReducer(coinReducer,initialCoinState)
  return (
    <>
    <div>CoinCollector</div>
    <pre>
        Action Type          Description <br />
        COLLECT_COIN           Add 1 coin <br />
        COLLECT_5_COINS        Add 5 coins <br />
        BONUS                  Add 10 bonus coins <br />
        LEVEL_UP               Increase level <br />
        RESET                  Reset everything <br />


    </pre>
    <h1>Coin: {state.coin}</h1>
    <h2>LEVEL : {state.level}</h2>
    <button onClick={()=>dispatch({type:"COLLECT_COIN"})}>Collect coin</button>
    <button onClick={()=>dispatch({type:"LOSE_COIN"})}>Lose Coin</button>
    <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
    <button onClick={()=>dispatch({type:"LEVEL_UP"})}>Level Up</button>
    </>
  )
}

export default CoinCollector