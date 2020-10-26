import React from "react";
const Shape = require("./shape");
const Circle = require("./circle");

module.export = class App extends React.Component {
  constructor() {}

  render() {
    return (
      <div>
        <Shape />
        <Circle />
      </div>
    );
  }
};
