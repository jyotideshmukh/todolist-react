import React from 'react'

export default function Todo({todo, changeToDO, deleteToDO}) {
    function handleDelete(id){
        console.log("deleteing id "+id)
        //console.log(todos)
        deleteToDO(id);
       // setTodos([...todos].filter(todo => todo.id !== id))
    }
    function completeToDo(id){
      console.log("changing id"+id)
      //props.changeToDO(updatedToDos)
      changeToDO(id)

    }
  return (
    <li key={todo.id}>
        <input type="checkbox" defaultChecked={ todo.complete } 
        onChange={()=>completeToDo(todo.id)}/>
      
        <div className={`todospan ${todo.complete ? 'text-success': ''} `}>        
            {todo.name}
        </div>
        
        <div className='tododelete'>
            <button onClick={()=>handleDelete(todo.id)}> X</button>
        </div>
    </li>
  )
}
