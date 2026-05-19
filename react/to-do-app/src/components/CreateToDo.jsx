import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const CreateToDo = ({ setList, list }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const todoId = searchParams.get("id")

    useEffect(() => {

        if (todoId) {

            const singleTodo = list.find(
                (todo) => todo.id == todoId
            )

            if (singleTodo) {
                setTitle(singleTodo.title)
                setDescription(singleTodo.description)
                setDate(singleTodo.date)
            }
        }

    }, [todoId, list])



    function handleSubmit(e) {

        e.preventDefault()

        // EDIT
        if (todoId) {

            const updatedList = list.map((todo) => {

                if (todo.id == todoId) {

                    return {
                        ...todo,
                        title,
                        description,
                        date
                    }
                }

                return todo
            })

            setList(updatedList)

            localStorage.setItem(
                "b82list",
                JSON.stringify(updatedList)
            )

        }

        // CREATE
        else {

            const newTodo = {
                id: Date.now(),
                title,
                description,
                date
            }

            const updatedList = [...list, newTodo]

            setList(updatedList)

            localStorage.setItem(
                "b82list",
                JSON.stringify(updatedList)
            )
        }

        navigate("/")
    }

    return (
        <>
            <div>
                <Link to='/'>Back to Home Page</Link>
            </div>

            <div className='container w-50 bg-secondary p-3 my-5 mx-auto'>

                <h3 className='text-center text-white'>
                    {todoId ? "Edit ToDo" : "Create ToDo"}
                </h3>

                <form className='p-5' onSubmit={handleSubmit}>

                    <div className="form-floating mb-3">

                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label>Title</label>

                    </div>

                    <div className="form-floating mb-3">

                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <label>Description</label>

                    </div>

                    <div className="form-floating mb-3">

                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />

                        <label>Date</label>

                    </div>

                    <button
                        type="submit"
                        className='btn btn-primary mb-3 w-100'
                    >
                        {todoId ? "Update ToDo" : "Create ToDo"}
                    </button>

                </form>

            </div>
        </>
    )
}

export default CreateToDo