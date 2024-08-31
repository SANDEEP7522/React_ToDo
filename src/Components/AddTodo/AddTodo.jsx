import { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";


function AddTodo(){

const {todos, setTodos} = useContext(TodoContext);

   const [todoText, setTodoText] = useState('');
  const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed');
          // Add your functionality here u want to add enter press ur data add
          let nextId= todos.length + 1;
         setTodos([...todos, {id: nextId, isFinited: false, text: todoText}]);
         setTodoText(' '); 
        }
      };

  return(
      <>
        <input className="m-2 p-1 rounded-lg border-4 border-blue-400 "
            placeholder="Add your next doto....." 
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
            type="text"
            onKeyDown={handleKeyDown}
        />
        <button className="m-2 p-1 rounded-lg"       
        onClick={() => {
         let nextId= todos.length + 1;
         setTodos([...todos, {id: nextId, isFinited: false, text: todoText}]);
          setTodoText(' '); 
          
        }}
        >Submit</button>
      </>
   )

}
export default AddTodo;