import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
   
  return (
    props.todos.map(todo =>  <Todo key={todo.id} 
                        todo={todo}
                        changeToDO={props.changeToDO}
                        deleteToDO= {props.deleteToDO}
                        />
              )  
    
  )
}
