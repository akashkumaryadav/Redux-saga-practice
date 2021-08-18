import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import { types } from "../redux/types";
import { connect } from "react-redux";

class RightTopComponentDumb extends Component {
  render() {
    return (
      <div className='container'>
        <div
          className='col'
          style={{
            background: "#5daae0",
            borderRadius: "5px",
            margin: "5% 0",
          }}
        >
          <div className='row' style={{ padding: "5% 0 0 40%" }}>
            <MyScreen key={1} tech={this.props.buttonClicked || "Right Top"} />
          </div>
          <div className='row' style={{ padding: "5% 0 10% 30%" }}>
            <ButtonGroup
              key={2}
              side={types.RIGHT_TOP}
              technologies={["Button A", "Button B", "Button C"]}
            />
          </div>
        </div>
      </div>
    );
  }
}

const RightTopComponent = connect(
  (state) => ({ buttonClicked: state.RT }),
  null
)(RightTopComponentDumb);

export default RightTopComponent;
