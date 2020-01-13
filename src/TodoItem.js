import React from 'react'

export default function TodoItem(props) {
  const { todo, index } = props;
  return (
    <li key={todo.title}>
      <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" name="done" id="done" checked={todo.done} />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit' }}>{todo.title}</span>
      <button onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
  )
}
