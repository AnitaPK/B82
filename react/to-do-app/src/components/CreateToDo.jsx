import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateToDo = ({setList,list}) => {
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [date,setDate] = useState()
    const [listForLocal,setListForLocal] = useState()

 

    function handleSubmit(e){
        e.preventDefault()
        const newToDo = {
            id:Date.now(),
            title:title,
            description:description,
            date:date
        }
        setList([...list, newToDo])
        localStorage.setItem('b82list',JSON.stringify(list))

    }

    return (
        <>
        <div>
            <Link to='/'>Back to Home Page</Link>
        </div>
            <div className='container w-50 bg-secondary p-3 my-5 mx-auto'>
                <h3 className='text-center text-white'>CreateToDo</h3>
                <form className='p-5' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" 
                        className="form-control" 
                        id="floatingInputTitle"
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <label htmlFor="floatingInputTitle">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="floatingDecription" 
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                        <label htmlFor="floatingDecription">Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        type="date" 
                        className="form-control" 
                        id="floatingDate"
                        onChange={(e)=>setDate(e.target.value)}
                        />
                        <label htmlFor="floatingDate">Date</label>
                    </div>
                    <button type=" " className='btn btn-primary mb-3 w-100'>Create ToDo</button>
                </form>
            </div>
        </>
    )
}

export default CreateToDo