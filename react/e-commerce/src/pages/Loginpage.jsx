import React, { useEffect, useState } from 'react'
import { SiSimplelogin } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const LoginPage = () => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [regUser ,setRegUser] = useState()
    const navigate = useNavigate()

    function handleLoginForm(e){
        e.preventDefault()
        if(regUser.email == email){
            if(regUser.password == password){
                // login function from AuthContext 
                navigate('/dashboard')
            }else{
                toast.error("Incorrect Password")
            }
        }else{
            toast.error("Invalid User")
        }

    }
    function fetchRegUser(){
        const u =JSON.parse(localStorage.getItem("b82"))
        setRegUser(u)
    }

    useEffect(()=>{
        fetchRegUser()
    },[])

    return (
        <>

            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <h1 className='display-1 text-center text-danger pt-5'>

                        <SiSimplelogin />
                        </h1>
                    </div>
                    <div className="col">
                        <div className='bg-info p-5 rounded'>
                        <h2>Login here...</h2>
                        <form className='bg-info p-3' onSubmit={handleLoginForm}>
                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                                
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button className='btn btn-primary mt-4' type='submit'>Login</button>
                            <Link to='/register'>If not Registered</Link>
                        </form>
                        </div>
                    </div>
                </div>

            </div>

<ToastContainer />
        </>
    )
}

export default LoginPage