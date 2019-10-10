import React from "react";
import Example from "./Chart";
import { Link } from "react-router-dom";

import "./record.css";

const Record = ({ match, history, location }) => {
  return (
    <div className='rec_page'>
      <div className='header'>
        <Link to='/calendar' className='li left btn-square'>
          Calendar
        </Link>
        <h1 className='char_h1 li'>Chart</h1>
        <Link to='/' className='li right btn-square'>
          Menu
        </Link>
      </div>
      <div id='chart'>
        <Example />
      </div>
    </div>
  );
};

export default Record;
