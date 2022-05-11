import React from 'react'
import {TodoItem} from './TodoItem';
export const Todos = (props)=>{
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className = 'container' style={myStyle}>
      <h2 className='my-3'>Todos List</h2>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> )
       })}
    </div>
  )
}
