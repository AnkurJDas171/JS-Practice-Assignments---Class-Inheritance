import React from "react";
import Shape from "./shape";
import Circle from "./circle";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Shape />
        <Circle />
      </div>
    );
  }
}
