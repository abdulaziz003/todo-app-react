import React, { Component } from 'react'

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
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} type="text" id="newTodo" value={this.state.newTodo}/>
          <button type="submit">Add</button>
        </form>
        <button onClick={()=> this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index)=>{
            return(  
              <li key={todo.title}>
                <input onChange={(event)=> this.toggleTodoDone(event, index)} type="checkbox" name="done" id="done" checked={todo.done}/>
                <span style={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>
                <button onClick={()=> this.removeTodo(index)}>Remove</button>
              </li>
            ) 
          })}
        </ul>
      </div>
    )
  }
}

