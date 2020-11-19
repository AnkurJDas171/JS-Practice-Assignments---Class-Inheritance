import React from "react";
const Shape = require("./shape");
// import { render } from "enzyme";

class Circle extends Shape {
  constructor(color) {
    super(color); 
  }

  calculateArea() {}; 

  render() {
    return<></ >;
  }
}

module.exports = Circle;
// import using require

// declare class

// export class using module.exports
