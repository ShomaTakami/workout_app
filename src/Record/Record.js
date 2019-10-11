import React from "react";
import Example from "./Chart";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./record.css";

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

  console.log("data", props.formDataRows);
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
        <Example rows={props.formDataRows} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  //returning as props object
  return {
    formDataRows: state.formDataReducer.rows
  };
}

//gets action from redux and returns in the component as props
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
  //1. getting states
  mapStateToProps,
  //2. getting actions
  mapDispatchToProps
)(Record);
