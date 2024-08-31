
import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import ToDoList from './Components/ToDoList/ToDoList'
import ToDo from './Components/ToDo/ToDo'

function App() {
  const [todos, setTodos] = useState ([
    // {id:1, Text: "todo1", isFinited:true},
    // {id:1, Text: "todo1", isFinited:false},
  

  ])

   function addTodos(todoText){
    let nextId = todos.length + 1;
    setTodos([...todos, {id: nextId, isFinited: false, text: todoText}]);
   }


  return (
    <>
    <AddTodo  addTodos={addTodos} /> 
    <ToDoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
