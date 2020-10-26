import React from 'react'

const Todo = props => {

return(
  <div className={`todo${props.todo.completed ? ' completd' : ''}`}>
    <p>{props.todo.task}</p>
  </div>
)
}

export default Todo