import { useState } from "react";


function AddTodo({addTodos}){


    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed');
        // Add your functionality here u want to add enter press ur data add
        addTodos(todoText);
        setTodoText(' ');
      }
    };


    const [todoText, setTodoText] = useState('');

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
          addTodos(todoText);
          setTodoText(' '); 
          
        }}
        >Submit</button>
      </>
   )

}
export default AddTodo;