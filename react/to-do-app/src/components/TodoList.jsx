import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({ list }) => {
    return (
        <>
            <div>TodoList</div>
            <div className="container">
                <Link to='/create' className="btn btn-primary"> + Todo</Link>
            </div>
            <div className="container">
                <div className="row">
                    {list.length == 0 ? <h3>No ToDos</h3> : <>
                        {list.map((todo, i) => (
                            <div className="col-sm-6 mb-3 mb-sm-0" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{todo.title}</h5>
                                        <p className="card-text">{todo.description}</p>
                                        <a href="#" className="btn btn-primary">{todo.date}</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </>}


                </div>
            </div>
        </>

    )
}

export default TodoList