import React from "react";

module.exports = class Shape  {
  
  constructor(color) {
    this.color = color;
  }
  //methods drawShape, calculateArea
  drawShape () {
    console.log("drawing shape");
  };
  calculateArea () {
    console.log("Shape area is");
  };

  // render() {
  //   return<></ >;
  // }
};

// declare class

// export class using module.exports
