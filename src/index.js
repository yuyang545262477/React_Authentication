import "core-js/fn/object/assign";
import React from "react";
import ReactDom from "react-dom";
import {browserHistory} from "react-router";
import Root from "./Root";

//render the main component into the dom

ReactDom.render(<Root history={browserHistory}/>, document.getElementById('app'));




    