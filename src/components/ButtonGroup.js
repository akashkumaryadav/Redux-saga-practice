import React, { Component } from "react";
import { store } from "../redux/main";

const style = {
  padding: "10px 25px",
  border: "none",
  borderRadius: "10px",
  margin: "10px",
};

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        {this.props.technologies.map((tech, i) => (
          <button
            style={style}
            key={`btn-${i}`}
            onClick={(event) =>
              store.dispatch({
                type: this.props.side,
                payload: event.currentTarget.innerText,
              })
            }
          >
            {tech}
          </button>
        ))}
      </div>
    );
  }
}

export default ButtonGroup;
