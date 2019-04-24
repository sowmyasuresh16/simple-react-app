import React from "react";
import "./TodoItem.css"

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return(
      <div className = "item-wrapper">
        <button className = "remove-todo" onClick = {(e) => this.removeTodo(this.props.id)}> remove </button> {this.props.todo.text}
      </div>
    )
  }
}
