function createData(id, menu, part, weight, reps, sets) {
  return { id, menu, part, weight, reps, sets };
}

export function getFormData() {
  console.log("action fired!");

  //usually has API calls to get data from database
  //but for now, send back fake data

  // NOT a default export
  const rows = [
    createData(
      "123456789",
      "Random title1",
      "open",
      "https://api.github.com/repos/angular/angular/",
      "2019-09-24T10:01:21Z",
      "2019-09-24T10:01:21Z"
    ),
    createData(
      "123456712",
      "Random title2",
      "open",
      "https://api.github.com/repos/angular/angular/",
      "2019-09-24T10:01:21Z",
      "2019-09-24T10:01:21Z"
    ),
    createData(
      "223456789",
      "Random title3",
      "open",
      "https://api.github.com/repos/angular/angular/",
      "2019-09-24T10:01:21Z",
      "2019-09-24T10:01:21Z"
    ),
    createData(
      "323456789",
      "Random title4",
      "open",
      "https://api.github.com/repos/angular/angular/",
      "2019-09-24T10:01:21Z",
      "2019-09-24T10:01:21Z"
    ),
    createData(
      "423456789",
      "Random title5",
      "open",
      "https://api.github.com/repos/angular/angular/",
      "2019-09-24T10:01:21Z",
      "2019-09-24T10:01:21Z"
    )
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

// 1. Actions will dispatch 2 things: type and payload
// 2. You don't have to return payload, if there is no need

// function createData(name, bodypart, weight, reps, sets, updated, goal) {
//   return { name, bodypart, weight, reps, sets, updated, goal };
// }

// export function getFormData() {
//   console.log("action fired!");

//   //usually has API calls to get data from database
//   //but for now, send back fake data

//   // NOT a default export
//   const rows = [
//     createData(
//       "bench press",
//       "chest",
//       "160lbs",
//       "10",
//       "3",
//       "9/28/2019",
//       "4000"
//     ),
//     createData(
//       "bench press",
//       "chest",
//       "160lbs",
//       "10",
//       "3",
//       "9/28/2019",
//       "4000"
//     ),
//     createData(
//       "bench press",
//       "chest",
//       "160lbs",
//       "10",
//       "3",
//       "9/28/2019",
//       "4000"
//     ),
//     createData(
//       "bench press",
//       "chest",
//       "160lbs",
//       "10",
//       "3",
//       "9/28/2019",
//       "4000"
//     ),
//     createData(
//       "bench press",
//       "chest",
//       "160lbs",
//       "10",
//       "3",
//       "9/28/2019",
//       "4000"
//     ),
//     createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000")
//   ];

//   return function(dispatch) {
//     dispatch({
//       type: "GET_FORM_DATA",
//       payload: rows
//     });
//   };
// }

// // payload ====> data to send to the reducer
// export function addFormData(payload) {
//   console.log("payload", payload);
//   return function(dispatch) {
//     dispatch({
//       type: "ADD_FORM_DATA",
//       payload: payload
//     });
//   };
// }

// export function deleteFormData(payload) {
//   return function(dispatch) {
//     dispatch({
//       type: "DELETE_FORM_DATA",
//       payload: payload
//     });
//   };
// }

// export function editFormData(payload) {
//   return function(dispatch) {
//     dispatch({
//       type: "EDIT_FORM_DATA",
//       payload: payload
//     });
//   };
// }
