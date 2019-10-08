// constant file
function createData(name, bodypart, weight, reps, sets, updated) {
  return { name, bodypart, weight, reps, sets, updated };
}

// NOT a default export
export const rows = [
  createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
  createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
  createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
  createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
  createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019"),
  createData("bench press", "chest", "160lbs", "10", "3", "9/28/2019")
];

// A default export
// export default rows
