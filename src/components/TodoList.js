import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
  return (
    todos.map(todo => <div> <Todo key={todo.id} todo={todo} /></div>)  
    
  )
}
