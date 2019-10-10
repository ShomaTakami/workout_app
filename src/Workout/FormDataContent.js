// constant file
// function createData(name, bodypart, weight, reps, sets, updated, goal) {
//   return { name, bodypart, weight, reps, sets, updated, goal };
// }

// // NOT a default export
// export const rows = [
//   createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000"),
//   createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000"),
//   createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000"),
//   createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000"),
//   createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000"),
//   createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019", "4000")
// ];

// A default export
// export default rows

// constant file
function createData(id, menu, part, weight, reps, sets) {
  return { id, menu, part, weight, reps, sets };
}

// NOT a default export
export const rows = [
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
