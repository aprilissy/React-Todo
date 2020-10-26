import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoList = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList:todoList
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleAddTask = (task) => {
    this.setState({
      todoList:[...this.state.todoList, {
        task: task,
        id: Date.now(),
        completed:false
      }]
    })
   }

   handleToggleTask = (taskID) => {
    this.setState({
      todoList:this.state.todoList.map(task => {
        if(task.id === taskID) {
          return {
            ...task, 
            completed: !task.completed
          }
        }else {
          return task;
        }
      })
    })
   }

   handleClearTask = () => {
     this.setState({
       todoList:this.state.todoList.filter(task => (!task.completed))
     })
   }

  render() {
    console.log('render',this.state);
    
    return (
      <div>
        <TodoForm handleAddTask={this.handleAddTask}/>
        <TodoList 
          todoList={this.state.todoList}
          handleToggleTask={this.handleToggleTask}
          handleClearTask={this.handleClearTask}
        />
      </div>
    );
  }
}

export default App;
