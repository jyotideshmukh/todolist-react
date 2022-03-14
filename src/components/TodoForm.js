import React,{useState} from 'react'

function TodoForm(props) {
    const [todoInput, setTodoInput ] = useState('')
   
   
    function handleSubmitForm(event){
        if(todoInput.trim().length == 0){
            return;
          }
          event.preventDefault();
          props.handleSubmit(todoInput);
          setTodoInput('')
          
    }

    function handleInput(event){
        setTodoInput(event.target.value)
      }

  return (
    <div>
        <form onSubmit={handleSubmitForm}>
        <input 
        className="todoinput" 
        type="text"
        onChange={ handleInput }
        placeholder='Add name of todo list' 
        value={todoInput} />
      </form>
        </div>
  )
}

export default TodoForm