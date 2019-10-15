function createData(id, menu, part, weight, reps, sets, goal) {
  return { id, menu, part, weight, reps, sets, goal };
}

export function getFormData() {
  const rows = [
    createData("1", "Bench Press", "Chest", "170", "10", "3", "220"),
    createData("2", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
    createData("3", "Dumbell Arm Curl", "Biseps", "30", "10", "3", "45"),
    createData("4", "Cable Press", "Triseps", "40", "10", "3", "60"),
    createData("5", "Side Raise", "Shoulder", "20", "15", "3", "30"),
    createData("6", "Shoulder Press", "Shoulder", "80", "10", "4", "80")
  ];

  return function(dispatch) {
    dispatch({
      type: "GET_FORM_DATA",
      payload: rows
    });
  };
}

//TODO Calendar
export function addToCalendar(payload) {
  console.log("payload", payload);
  return function(dispatch) {
    dispatch({
      type: "ADD_TO_CALENDAR_DATA",
      payload: payload
    });
  };
}
export function addFormData(payload) {
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
