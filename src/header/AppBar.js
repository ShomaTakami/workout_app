import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AppBar.css";
class AppBar extends Component {
  render() {
    return (
      <div id='header'>
        <Link to='/record' className='li left '>
          &#8592; Chart
        </Link>
        <h1 className='work_h1 li'>Menu</h1>
        <Link to='/calendar' className='li right'>
          Calendar &#8594;
        </Link>
      </div>
    );
  }
}

export default AppBar;
