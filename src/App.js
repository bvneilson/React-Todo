import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }

  handleFormChange = event => {
    this.setState({
        todo: {
          task: event.target.value,
          id: Date.now(),
          completed: false}
      }
    )
  }
  handleTodoSubmit = event => {
    event.preventDefault();
    if (!this.state.todo) {
      return;
    }
    this.setState({todos: [...this.state.todos, this.state.todo], todo: ''})
  }
  clearCompleted = event => {
    event.preventDefault();
    const filtered = this.state.todos.filter(todo => todo.completed === false);
    this.setState({todos: filtered})
  }
  toggleComplete = event => {
    const updated = this.state.todos.map(todo =>
      todo.id === Number(event.target.id)
        ? { ...todo, completed: !todo.completed ? true : false }
        : todo
    );
    this.setState({todos: updated})
    // console.log('Clicked item id: ' + event.target.id)
    // console.log(this.state.todos);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        todo={this.state.todo}
        clearCompleted={this.clearCompleted}
        handleChange={this.handleFormChange}
        handleSubmit={this.handleTodoSubmit}
        />
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
