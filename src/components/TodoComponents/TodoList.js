import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    props.todos.map(todo => {
      return (
        <Todo todo={todo} />
      )
    })
  )
}

export default TodoList;
