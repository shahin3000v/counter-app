import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  /*   constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  formatCount = () => {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  handleDecrement = () => {
    if (this.state.value) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
