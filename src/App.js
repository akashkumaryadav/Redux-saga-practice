import React, { Component } from "react";
import "./App.css";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";
import { Counter } from "./components/Counter";

class App extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            background: "#435368",
            flexWrap: "wrap",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div style={{ width: "50%" }}>
            <LeftTopComponent />
            <LeftDownComponent />
          </div>
          <div style={{ width: "50%" }}>
            <RightTopComponent />
            <RightDownComponent />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Counter />
          </div>
        </div>
      </>
    );
  }
}

export default App;
