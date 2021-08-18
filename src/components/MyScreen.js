import React, { Component } from "react";
import { connect } from "react-redux";

class MyScreenDumb extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: "30px",
          color: "#ffffff",
          fontWeight: "900",
        }}
      >
        {this.props.tech + " " + this.props.counter}
      </div>
    );
  }
}

const MyScreen = connect(
  (state) => ({
    counter: state.counter,
  }),
  null
)(MyScreenDumb);

export default MyScreen;
