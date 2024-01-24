//allows to use Jsx - so to write HTML as Javascript statements
//it will compile elements
import React from "react";
//React Document option model allows to import/inserts elements
//created by React inside of the HTML elements
import ReactDOM from "react-dom";

const element = <h1> Hello world</h1>;

ReactDOM.render(element, document.getElementById("root"));
