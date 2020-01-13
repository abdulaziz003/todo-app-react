import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
      <ul>
      {props.todos.map((todo, index) => {
        return (<TodoItem key={index} todo={todo} index={index} toggleTodoDone={props.toggleTodoDone} removeTodo={props.removeTodo} />)
        })}
      </ul>
  )
}
