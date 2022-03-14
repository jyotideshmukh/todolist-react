import React, {useState} from 'react';
import TodoList from './TodoList';
import '../App.css';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      name:'Todo1',
      complete:false
    },
    {
      id:2,
      name:'Todo2',
      complete:true
    }])

    const [idIodoInput, setIdTodoInput ] = useState(3)
    

    function handleSubmit(todoInput){

     
      setTodos([...todos,{
        id:idIodoInput,
        name: todoInput,
        complete:false
      }])
      setIdTodoInput(previdIodoInput => previdIodoInput +1)
     
    }
    
    function deleteToDO(id){
      //console.log("In parent"+id)
      setTodos([...todos].filter(todo => todo.id !== id))
    }

    function changeToDO(id){
      //console.log("In parent"+id)
      const updateTodo = todos.map(todo =>{
        //console.log(todo)
        console.log("id"+id)
          if(todo.id === id){
           // console.log("matched")
            //console.log(todo)
             todo.complete = !todo.complete
          }
          return todo
      })
      console.log(updateTodo);
      setTodos(todos,updateTodo)
    }
   
    
    
  return (
    <div className="App">
      <h3>Todo List</h3>
      <TodoForm handleSubmit={handleSubmit}/>
      <div>
        <ul>
        <TodoList changeToDO={changeToDO} todos={todos} deleteToDO={deleteToDO}/>
        </ul>
      </div>
      <button>Add Todo</button>
      <button>Clear Todo</button>
      <div>{todos.length} left from Todo</div>
      </div>
  );
}

export default App;
