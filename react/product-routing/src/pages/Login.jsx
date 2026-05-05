import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()


    function handleLogin(){
navigate('/')
    }
  return (
    <>
    <div>Login</div>
    <button onClick={()=>handleLogin()}>LOGIN</button>
    </>
  )
}

export default Login