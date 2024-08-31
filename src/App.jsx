
import { useReducer } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import ToDoList from './Components/ToDoList/ToDoList'
import TodoContext from './Components/Context/TodoContext'
import TodoReducer from './Components/Reducers/TodoReducer'

function App() {
  
 const [todos, dispatch] = useReducer(TodoReducer, []);


  return (
    <>
    <h1>Todo_App</h1>
    <TodoContext.Provider value={{todos, dispatch}}>
      <AddTodo /> 
      <ToDoList />
    </TodoContext.Provider>
    
    </>
  )
}

export default App
