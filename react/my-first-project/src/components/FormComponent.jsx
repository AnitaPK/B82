import React, { useState } from 'react'

function FormComponent() {
    const [userName, setUserName] = useState('Aditya')
    const [textSTR, setTextSTR] = useState()
console.log(userName)
console.log(textSTR)
    function handleSubmit(e){
        e.preventDefault()
        console.log("Button is clicked")
        console.log(userName)
        console.log(textSTR)
        alert(`${userName} is oposition of  ${textSTR}`)
    }
    function handleChangeText(e){
        setTextSTR(e.target.value)
    }

  return (
    <div style={{height:"500px", backgroundColor:"#AFAFAFAF"}}>
        <h1>FormComponent</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            // value={userName}
                onChange={(e)=>setUserName(e.target.value)}
            />
            <input type='text' onChange={handleChangeText} />

            <button type='submit'>Submit</button>
        </form>
    
    <div>
        <h2>{userName}</h2>
    </div>
    
    </div>
  )
}

export default FormComponent