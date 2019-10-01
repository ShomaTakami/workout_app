import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import EditIcon from "@material-ui/icons/Edit";

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "menu", label: "Menu", minWidth: 250 },
  { id: "bodypart", label: "BodyPart", minWidth: 250 },
  {
    id: "weight",
    label: "Weight",
    minWidth: 50
  },
  {
    id: "reps",
    label: "repetitions (reps)",
    minWidth: 50,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "sets",
    label: "Sets",
    minWidth: 50,
    align: "center"
  },
  {
    id: "action",
    label: "Action",
    minWidth: 45,
    align: "center",
    format: value => value.toFixed(2)
  }
];

function createData(menu, bodypart, weight, reps, sets, action) {
  return { menu, bodypart, weight, reps, sets, action };
}

const rows = [
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3),
  createData("Bench Press", "Chest", "55lbs each", 10, 3)
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 700,
    overflow: "auto"
  }
});

export default function Workout({ match, history, location }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className={classes.root}
      style={{ backgroundColor: "white", height: "90vh" }}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <EditIcon />
                  </TableRow>
                  //TODO icon add (edit, delete)
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
