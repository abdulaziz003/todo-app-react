import React from 'react'

export default function newTodoForm(props) {
  return (
      <form onSubmit={props.formSubmitted}>
        <label htmlFor="newTodo">New Todo</label>
        <input onChange={props.newTodoChanged} type="text" id="newTodo" value={props.newTodo} />
        <button type="submit">Add</button>
      </form>
  )
}
