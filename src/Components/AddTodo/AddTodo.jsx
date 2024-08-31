import { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";


function AddTodo(){
const { dispatch } = useContext(TodoContext);
const [todoText, setTodoText] = useState('');

  function addTodo(todoText){
   dispatch({type: 'add_todo', payload: {todoText}});
  }
  const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // Add your functionality here u want to add enter press ur data add
          addTodo(todoText);
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
        addTodo(todoText);
          setTodoText(' '); 
        }}>Submit</button>
      </>
   )

}
export default AddTodo;