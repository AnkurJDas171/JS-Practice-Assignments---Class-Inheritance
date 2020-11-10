import React from "react";
const Shape = require("./shape");
// import { render } from "enzyme";

module.exports = class Circle extends Shape {
  constructor() {
    super();
  }

  calculateArea(){
    super.calculateArea();
  };

  render() {
    return;
  }
}


// import using require

// declare class

// export class using module.exports
