import React from "react";
const Shape = require("./shape");
import { render } from "enzyme";


module.export = class Circle extends Shape{

  constructor(color){

    super(color);

  }

  calculateArea = function(){};

  render(){

    return;

  }

}


// import using require


// declare class


// export class using module.exports