import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import CreateToDo from './components/CreateToDo'

function App() {
  const [list,setList] = useState([])

  function fetchData(){

    const listFromlocal = JSON.parse(localStorage.getItem("b82list"))
    setList(listFromlocal)
    if(!listFromlocal){
    localStorage.setItem('b82list',JSON.stringify(list))
    }
  }

  useEffect(()=>{
      fetchData()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList list={list} />}></Route>
        <Route path='/create' element={<CreateToDo setList={setList} list={list} />}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App
