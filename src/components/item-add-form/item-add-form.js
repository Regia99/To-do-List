import React, { Component } from "react";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onInputChange = (event) => {
    this.setState({
      label: event.target.value,
      target: event.target,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.label);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onInputChange}
          placeholder="Type your todo"
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
