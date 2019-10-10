function createData(id, menu, part, weight, reps, sets, goal) {
  return { id, menu, part, weight, reps, sets, goal };
}

// NOT a default export
export const rows = [
  createData("1", "Bench Press", "Chest", "150", "10", "4", "230"),
  createData("2", "Incline Bench Press", "Chest", "90", "10", "3", "120"),
  createData("33", "Shoulder Press", "Shoulder", "80", "10", "4", "80"),
  createData("13", "Side Raise", "Shoulder", "40", "10", "3", "48"),
  createData("23", "Lat Pull", "Back", "70", "10", "3", "100")
];
