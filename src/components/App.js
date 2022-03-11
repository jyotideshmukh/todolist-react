import React, {useState} from 'react';
import TodoList from './TodoList';
import '../App.css';

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

    const [todoInput, setTodoInput ] = useState('')
    const [idIodoInput, setIdTodoInput ] = useState(3)

    function handleSubmit(event){
      event.preventDefault();
      setTodos([...todos,{
        id:idIodoInput,
        name: todoInput,
        complete:false
      }])

      setTodoInput('')
      setIdTodoInput(previdIodoInput => previdIodoInput +1)
    }
    function handleInput(event){
      setTodoInput(event.target.value)
    }
  return (
    <div className="App">
      <h3>Todo List</h3>
      <div>
        <form onSubmit={handleSubmit}>
        <input 
        className="todoinput" 
        type="text"
        onChange={ handleInput }
        placeholder='Add name of todo list' 
        value={todoInput} />
      </form>
        </div>
      <div>
        <TodoList todos={todos}/>
      </div>
      <button>Add Todo</button>
      <button>Clear Todo</button>
      <div>{todos.length} left from Todo</div>
      </div>
  );
}

export default App;
