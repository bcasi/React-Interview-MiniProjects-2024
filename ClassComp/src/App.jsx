import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//yclass
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="container">
        <h1>Counter App</h1>
        <p>Count: {this.state.counter}</p>
        <div className="button-container">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
