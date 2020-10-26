// your components will all go in this `component` directory.

import React from 'react'
import Todo from './Todo'

const ToDoList = props => {
console.log('List props',props);

const handleClick = () => {
  props.handleClearTask()
}

  return (
   <div>
      <div className='todoList'>
        {props.todoList.map(todo => (
          <Todo handleToggleTask={props.handleToggleTask} key={todo.id} todo={todo} />
        ))}
      </div>
      <button onClick={handleClick} className='clear-btn'>
        Clear Completed Items
      </button>
   </div>
  )
}

export default ToDoList;