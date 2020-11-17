import React from "react";

module.exports = class Shape extends React.component {
  constructor(props) {
    super(props);
    this.color = "red";
    this.drawShape = this.drawShape.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  //methods drawShape, calculateArea
  drawShape() {}
  calculateArea() {}

  render() {
    return;
  }
};

// declare class

// export class using module.exports
