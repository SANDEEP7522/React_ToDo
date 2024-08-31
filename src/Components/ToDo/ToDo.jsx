import { useState } from "react";

function ToDo({editTodo, deleteTodo, text, isFinised}){

    const [isEditting, setIsEditting] = useState(false);
    const [todoText, setTodoText] = useState(text);

return(
    <div>

        <input type="checkbox" checked={isFinised} />
       
        {isEditting? <input onChange={(e) => setTodoText(e.target.value)}
         /> :  <span> {todoText} </span>}
        
        <button  className="m-2 p-1 rounded-lg "
        onClick={() => {
            setIsEditting(!isEditting);
            editTodo(todoText);
        
        }}> {isEditting? 'Save':'Edit'} </button>

        <button  className="m-2 p-1 rounded-lg"
        onClick={deleteTodo} > Delete </button>
       
    </div>
);

}
export default ToDo;