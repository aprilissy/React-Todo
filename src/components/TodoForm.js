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

  // handleClick = () => {
  //   this.props.handleClearTask()
  // }


  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddTask(this.state.input)
  }

  render() {    
    return(

     <div className='fromContainer'>
        <form onSubmit={this.handleSubmit}>
          <input
          className='input'
          name='todo'
          value={this.state.input}
          type='text'
          onChange={this.handleChanges}
          />
          <button>Add Todo</button>
        </form>
        <button 
          onClick={this.props.handleClearTask} className='clear-btn'>
        Clear Completed
      </button>
     </div>
    )
  }
}

export default TodoForm;