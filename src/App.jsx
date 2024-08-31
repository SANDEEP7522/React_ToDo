
import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import ToDoList from './Components/ToDoList/ToDoList'
import TodoContext from './Components/Context/TodoContext'

function App() {
  const [todos, setTodos] = useState ([
    {id:1, Text: "todo1", isFinited:true},
    {id:1, Text: "todo1", isFinited:false},
  

  ])

  //  function addTodos(todoText){
  //   let nextId = todos.length + 1;
  //   setTodos([...todos, {id: nextId, isFinited: false, text: todoText}]);
  //  }

    // useEffect(() => {
    //   console.log(todos);
      
    // })

  return (
    <>
    <TodoContext.Provider value={{todos, setTodos}}>
      <AddTodo /> 
      <ToDoList />
    </TodoContext.Provider>
    
    </>
  )
}

export default App
