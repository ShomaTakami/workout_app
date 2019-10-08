// 1. Actions will dispatch 2 things: type and payload
// 2. You don't have to return payload, if there is no need

function createData(name, bodypart, weight, reps, sets, updated) {
  return { name, bodypart, weight, reps, sets, updated };
}

export function getFormData() {
  console.log("action fired!");

  //usually has API calls to get data from database
  //but for now, send back fake data

  // NOT a default export
  const rows = [
    createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
    createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
    createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
    createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
    createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
    createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019")
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
  console.log("payload", payload);
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
