import { useContext } from 'react';
import ToDo from '../ToDo/ToDo';
import './ToDOList.css'
import TodoContext from '../Context/TodoContext';


function ToDOList(){

   const {todos, setTodos} = useContext(TodoContext);

    function onDeleteTodo(id){
       const newTodoList = todos.filter(todo => todo.id != id);
       setTodos(newTodoList);
      } 

    function onEditTodo(id, newTodo){

        const newTodoList = todos.map(todo => {
            if (todo.id == id) {
                todo.text = newTodo;
            }
            return todo;
        });
        setTodos(newTodoList);
    }  
       
    function onFinishTodo(id, state){
        const newTodoList = todos.map(todo => {
            if (todo.id == id) {
                todo.isFenished = state;
            }
            return todo;
        });
        setTodos(newTodoList);
    }
   

    return(
        todos && todos.map((todo) => 
            <ToDo
             key={todo.id } 
             text={todo.text} 
             isFenished={todo.isFenished} 
             editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
             deleteTodo={() => onDeleteTodo(todo.id)}
             finishTodo={(state) => onFinishTodo(todo.id, state)}
            />)
    );
}
export default ToDOList;
