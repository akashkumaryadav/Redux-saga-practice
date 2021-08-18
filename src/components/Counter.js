import React from "react";
import { connect } from "react-redux";
import { types } from "../redux/types";

const style = {
  padding: "10px 25px",
  border: "none",
  borderRadius: "10px",
  margin: "10px",
};

const CounterDumb = ({ value, onIncrement, onDecrement, onReset }) => {
  return (
    <div>
      <button style={style} onClick={onIncrement}>
        Increment
      </button>{" "}
      <button style={style} onClick={onDecrement}>
        Decrement
      </button>
      <button
        style={{ ...style, color: "red", fontWeight: "bold" }}
        onClick={onReset}
      >
        Reset all
      </button>
      <hr />
      <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
        Clicked: {value} times
      </div>
    </div>
  );
};

const action = (type) => () => ({ type });

export const Counter = connect((state) => ({ value: state.counter }), {
  onIncrement: action(types.INCREMENT),
  onDecrement: action(types.DECREMENT),
  onReset: action(types.RESET),
})(CounterDumb);
