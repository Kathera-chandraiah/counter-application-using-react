import { Component } from "react";
import "./index.css";
class Counter extends Component {
  state = { count: 0 };
  onIncrement = () => {
    this.setState((previousState) => {
      return { count: previousState.count + 1 };
    });
  };
  onDecrement = () => {
    this.setState((previousState) => {
      return { count: previousState.count - 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1 className="counter-text">Counter</h1>
        <p className="counter-value">{count}</p>
        <div>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
