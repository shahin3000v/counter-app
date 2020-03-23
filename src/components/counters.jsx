import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counterList: [
      { id: 1, value: 0 },
      { id: 2, value: 13 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counterList.map(c => (
          <Counter key={c.id} value={c.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
