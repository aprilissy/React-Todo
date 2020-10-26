// your components will all go in this `component` directory.

import React from 'react'
import Todo from './Todo'

const ToDoList = props => {



  return (
   <div>
      <div className='todoList'>
        {props.todoList.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <button className='clear-btn'>
        Clear Completed Items
      </button>
   </div>
  )
}

export default ToDoList;