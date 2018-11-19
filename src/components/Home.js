import React, { Component } from 'react'
import uid from 'uid'
import Input from './Input'
import Todo from './Todo'
import Separator from './Separator'
import ProgressBar from './ProgressBar'

import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 4px 40px;
  grid-auto-rows: 32px;
`

export default class Home extends Component {
  state = {
    todos: this.load(),
  }

  addTodo = text => {
    this.setState({
      todos: [{ text, done: false, id: uid() }, ...this.state.todos],
    })
  }

  toggleTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const todo = todos[index]

    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1),
      ],
    })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
    })
  }

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(this.renderSingleTodo)
  }

  renderDoneTodos() {
    return (
      <React.Fragment>
        <Separator text="DONE" />
        {this.state.todos.filter(todo => todo.done).map(this.renderSingleTodo)}
      </React.Fragment>
    )
  }

  renderSingleTodo = todo => (
    <Todo
      key={todo.id}
      text={todo.text}
      done={todo.done}
      onToggle={() => this.toggleTodo(todo.id)}
      onDelete={() => this.deleteTodo(todo.id)}
    />
  )

  determineProgress() {
    const { todos } = this.state
    const doneTodos = todos.filter(t => t.done)
    return doneTodos.length / todos.length
  }

  render() {
    this.save()

    return (
      <Wrapper>
        <ProgressBar percentage={this.determineProgress()} />
        <Input onEnter={this.addTodo} />
        <Separator text="TODO" />
        {this.renderOpenTodos()}
        {this.props.showDoneTodos && this.renderDoneTodos()}
      </Wrapper>
    )
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}
