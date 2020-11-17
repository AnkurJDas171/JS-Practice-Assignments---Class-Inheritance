import React from "react";
const Shape = require("./shape");
// import { render } from "enzyme";

class Circle extends Shape {
  constructor(props) {
    super(props);
    //this.calculateArea = this.calculateArea.bind(this);
  }

  calculateArea = function () {
    //super.calculateArea();
  };

  render() {
    return;
  }
}

module.exports = Circle;
// import using require

// declare class

// export class using module.exports
