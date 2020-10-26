import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state ={
      input:''
    }
  }

  handleChanges = e => {
    this.setState({
      input:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddTask(this.state.input)
  }

  render() {    
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        name='todo'
        value={this.state.input}
        type='text'
        onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm;