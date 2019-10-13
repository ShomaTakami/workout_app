function createData(id, menu, part, weight, reps, sets, goal) {
  return { id, menu, part, weight, reps, sets, goal };
}

export function getFormData() {
  // console.log("action fired!");

  //usually has API calls to get data from database
  //but for now, send back fake data

  // NOT a default export
  const rows = [
    createData(
      "1",
      "Example Menu",
      "Example BodyPart",
      "How much weight?",
      "How many reps?",
      "How many sets?",
      "120"
    ),
    createData("2", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("3", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("4", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("5", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("6", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("33", "Shoulder Press", "Shoulder", "80", "10", "4", "80")
  ];

  return function(dispatch) {
    dispatch({
      type: "GET_FORM_DATA",
      payload: rows
    });
  };
}

// payload ====> data to send to the reducer
export function addFormData(payload) {
  // console.log("payload", payload);
  return function(dispatch) {
    dispatch({
      type: "ADD_FORM_DATA",
      payload: payload
    });
  };
}

export function deleteFormData(payload) {
  return function(dispatch) {
    dispatch({
      type: "DELETE_FORM_DATA",
      payload: payload
    });
  };
}

export function editFormData(payload) {
  return function(dispatch) {
    dispatch({
      type: "EDIT_FORM_DATA",
      payload: payload
    });
  };
}
