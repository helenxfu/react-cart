import React from "react";
import "./styles.css";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("updated", prevProps, prevState);
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  totalCountClass() {
    let totalCount = "";
    totalCount += this.props.counter.value === 0 ? "zero" : "something";
    return totalCount;
  }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>Add an item to cart</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    return (
      <div>
        <span className={this.totalCountClass()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onDecrement(this.props.counter)}>
          -
        </button>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="delete"
        >
          x
        </button>
      </div>
    );
  }
}

export default Counter;
