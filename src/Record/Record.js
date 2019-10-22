import React from "react";
import Example from "./Chart";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./record.css";
import "../header/AppBar.css";

import {
  getFormData,
  addFormData,
  deleteFormData,
  editFormData
} from "../actions/formData";

const Record = (props, { match, history, location }) => {
  React.useEffect(() => {
    if (props.formDataRows.length === 0) {
      props.getFormData();
    }
  });

  // console.log("data", props.formDataRows);
  return (
    <div className='rec_page'>
      <div id='header'>
        <Link to='/calendar' className='li left '>
          &#8592; Calendar
        </Link>
        <h1 className='char_h1 li'>Chart</h1>
        <Link to='/' className='li right'>
          Menu &#8594;
        </Link>
      </div>
      <div id='chart'>
        <Example rows={props.formDataRows} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formDataRows: state.formDataReducer.rows
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getFormData,
      addFormData,
      deleteFormData,
      editFormData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
