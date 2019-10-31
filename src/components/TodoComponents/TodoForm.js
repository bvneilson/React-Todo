import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input placeholder="Enter new Todo" onChange={props.handleChange} />
      <button type="submit" onClick={props.handleSubmit}>Add to List</button>
    </form>
  )
}

export default TodoForm;
