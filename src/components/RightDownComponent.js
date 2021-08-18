import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import { types } from "../redux/types";
import { connect } from "react-redux";

class RightDownComponentDumb extends Component {
  render() {
    return (
      <div className='container'>
        <div
          className='col'
          style={{
            background: "#fc7500",
            borderRadius: "5px",
            margin: "5% 0",
          }}
        >
          <div className='row' style={{ padding: "5% 0 0 40%" }}>
            <MyScreen key={1} tech={this.props.buttonClicked || "Right Down"} />
          </div>
          <div className='row' style={{ padding: "5% 0 10% 30%" }}>
            <ButtonGroup
              key={2}
              side={types.RIGHT_DOWN}
              technologies={["Button A", "Button B", "Button C"]}
            />
          </div>
        </div>
      </div>
    );
  }
}

const RightDownComponent = connect(
  (state) => ({ buttonClicked: state.RD }),
  null
)(RightDownComponentDumb);

export default RightDownComponent;
