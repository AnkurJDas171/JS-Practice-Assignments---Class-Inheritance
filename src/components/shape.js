import React from "react";

module.exports = class Shape extends React.component {
  color = null;

  constructor(color) {
    super();
    this.color = color;
    // this.drawShape = this.drawShape.bind(this);
    // this.calculateArea = this.calculateArea.bind(this);
  }
  //methods drawShape, calculateArea
  drawShape = function () {};
  calculateArea = function () {};

  render() {
    return;
  }
};

// declare class

// export class using module.exports
