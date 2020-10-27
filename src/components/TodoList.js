// your components will all go in this `component` directory.

import React from 'react'
import Todo from './Todo'

const ToDoList = props => {
console.log('List props',props);



  return (
   <div>
      <div className='todoList'>
        {props.todoList.map(todo => (
          <Todo handleToggleTask={props.handleToggleTask} key={todo.id} todo={todo} />
        ))}
      </div>
     
   </div>
  )
}

export default ToDoList;