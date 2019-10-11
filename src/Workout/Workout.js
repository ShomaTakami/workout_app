import React from "react";
import WorkoutTable from "./WorkoutTable";
import Modal from "./Modal";
import { Link } from "react-router-dom";

// Redux Step 1 > import 2 things
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./workout.css";
//Redux Step: import actions
import {
  getFormData,
  addFormData,
  deleteFormData,
  editFormData
} from "../actions/formData";

function Workout(props) {
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);
  const [formDataId, setFormDataId] = React.useState(null);

  React.useEffect(() => {
    if (props.formDataRows.length === 0) {
      props.getFormData();
    }
  });

  const emptyDefault = {
    menu: "",
    part: "",
    weight: "",
    reps: "",
    sets: ""
  };

  const getDataFromId = () => {
    const index = props.formDataRows.findIndex(row => formDataId === row.id);

    return props.formDataRows[index];
  };

  console.log("formDataRows", props.formDataRows);
  return (
    <div className='work_page'>
      <div className='header'>
        <Link to='/record' className='li left btn-square'>
          Chart
        </Link>
        <h1 className='work_h1 li'>Menu</h1>
        <Link to='/calendar' className='li right btn-square'>
          Calendar
        </Link>
      </div>
      <WorkoutTable
        openModal={() => setOpen(true)}
        setIsAddButton={setIsAddButton}
        setFormDataId={setFormDataId}
        rows={props.formDataRows}
        deleteFormData={props.deleteFormData}
      />
      {open && (
        <Modal
          handleClose={() => setOpen(false)}
          open={open}
          editFormData={props.editFormData}
          isAddButton={isAddButton}
          addFormData={props.addFormData}
          formData={isAddButton ? emptyDefault : getDataFromId()}
        />
      )}
    </div>
  );
}

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
)(Workout);
