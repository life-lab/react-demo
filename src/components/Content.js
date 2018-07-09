import React, { Component } from "react";
import Box from './header/Box';
import Router from './Router';

import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Box>
          <Router />
        </Box>
      </div>
    );
  }
}
