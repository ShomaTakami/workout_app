import React from "react";
import WorkoutTable from "./WorkoutTable";
import Modal from "./Modal";
import { rows } from "./FormDataContent";
import "./workout.css";
import { Link } from "react-router-dom";

// Redux Step 1 > import 2 things
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//Redux Step: import actions
import {
  getFormData,
  addFormData,
  deleteFormData,
  editFormData
} from "../actions/formData";

function Workout(props) {
  // [1,2] 1 = statename, 2 = setState
  // userState(3) 3 means default value

  // data type: boolean
  const [open, setOpen] = React.useState(false);
  const [isAddButton, setIsAddButton] = React.useState(true);

  // data type: number
  const [formDataId, setFormDataId] = React.useState(null);

  //fires function right away when component loads
  React.useEffect(() => {
    if (props.formDataRows.length === 0) {
      props.getFormData();
    }
  });

  //Does not fire right away. Needs to be called from UI
  // const getFormData = () => props.getFormData();

  //object
  const emptyDefault = {
    menu: "", //means null
    part: "",
    weight: "",
    reps: "",
    sets: ""
  };

  //function
  const getDataFromId = () => {
    // find the index of the object containing the right id
    const index = rows.findIndex(row => formDataId === row.id);

    console.log("index", index);
    return rows[index];
  };

  console.log("formDataRows", props.formDataRows);
  return (
    <div className='work_page'>
      <div className='header'>
        <Link to='/record' className='li left'>
          <button className='btn-square'>go to Chart</button>
        </Link>
        <h1 className='work_h1 li'>Menu</h1>
        <Link to='/calendar' className='li right'>
          <button className='btn-square'>go to calendar</button>
        </Link>
      </div>
      <WorkoutTable
        openModal={() => setOpen(true)}
        setIsAddButton={setIsAddButton}
        setFormDataId={setFormDataId}
        rows={props.formDataRows}
        deleteFormData={props.deleteFormData}
      />
      {/* when we click edit or plus button, Modal component renders */}
      {open && (
        <Modal
          handleClose={() => setOpen(false)}
          // open={open}
          editFormData={props.editFormData}
          isAddButton={isAddButton}
          addFormData={props.addFormData}
          formData={isAddButton ? emptyDefault : getDataFromId()}
        />
      )}
      {/* ------------------------------------------------------ */}
    </div>
  );
}

//gets stuff from the store and returns in the component as props
function mapStateToProps(store) {
  //returning as props object
  return {
    formDataRows: store.formDataReducer.rows
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
)(Workout);
