import ToDo from '../ToDo/ToDo';
import './ToDOList.css'


function ToDOList({todos, setTodos}){


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
       
   

    return(
        todos && todos.map((todo) => 
            <ToDo
             key={todo.id } 
             text={todo.text} 
             isFenished={todo.isFenished} 
             editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
             deleteTodo={() => onDeleteTodo(todo.id)}
            />)
    );
}
export default ToDOList;
