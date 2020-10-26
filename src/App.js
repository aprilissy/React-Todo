import React from 'react';
import TodoList from './components/TodoList'

const todolList = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todolList:todolList
    }
  }
  // you will need a place to store your state in this component.

  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todoList={this.state.todolList}/>
      </div>
    );
  }
}

export default App;
