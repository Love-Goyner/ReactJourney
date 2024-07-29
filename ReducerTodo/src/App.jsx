import { useEffect } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import AllTodos from './component/AllTodos'

function App() {
  // useEffect(() => {
  //   const todo = JSON.parse(localStorage.getItem("todos"))

  //   if(todo && todo.length>0){
  //     setTodos(todo);
  //   }
  // }, [])


  return (
    <>
     <AddTodo/>
     <AllTodos/>
    </>
  )
}

export default App
