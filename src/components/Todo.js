import React from 'react'

const Todo = props => {

  const handleClick = () => {
    props.handleToggleTask(props.todo.id)
  }

return(
  <div onClick={handleClick} className={`todo${props.todo.completed ? ' completd' : ''}`}>
    <p>{props.todo.task}</p>
  </div>
)
}

export default Todo