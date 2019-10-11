function createData(id, menu, part, weight, reps, sets, goal) {
  return { id, menu, part, weight, reps, sets, goal };
}

export function getFormData() {
  // console.log("action fired!");

  //usually has API calls to get data from database
  //but for now, send back fake data

  // NOT a default export
  const rows = [
    createData("2", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("33", "Shoulder Press", "Shoulder", "80", "10", "4", "80"),
    createData("13", "Side Raise", "Shoulder", "40", "10", "3", "50"),
    createData("4445", "Cable Press", "Chest", "10", "10", "3", "20"),
    createData("689", "Dumbell Curl", "Biseps", "20", "10", "3", "50"),
    createData("23", "Lat Pull", "Back", "70", "10", "3", "100")
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
