import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default class App extends Component {
  constructor(){
    super();
    this.state = {title: 'Todo App', newTodo: '', todos: [{title: 'try', done: false}]}
  }

  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  toggleTodoDone(event,index){
    const todos = [...this.state.todos];// copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked // update done property on copied todo
    };// copy the todo
    this.setState({
      todos
    })
  }

  removeTodo(index){
    const todos = [...this.state.todos];// copy the array
    todos.splice(index, 1);
    this.setState({
      todos
    })
  }

  allDone(){
    const todos = this.state.todos.map(todo=>{
      return {...todo, done: true}

    });
    this.setState({
      todos
    })
  }


  render() {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        
        <p>{this.state.newTodo }</p>
        <NewTodoForm formSubmitted={this.formSubmitted.bind(this)} newTodoChanged={this.newTodoChanged.bind(this)} newTodo={this.state.newTodo}/>
        <button onClick={()=> this.allDone()}>All Done</button>
        <TodoList todos={this.state.todos} toggleTodoDone={this.toggleTodoDone.bind(this)} removeTodo={this.removeTodo.bind(this)} />
      </div>
    )
  }
}

