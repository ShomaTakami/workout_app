import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "menu", label: "Menu", minWidth: 170 },
  { id: "part", label: "Part", minWidth: 100 },
  {
    id: "weight",
    label: "Weight\u00a0(lbs)",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "reps",
    label: "Reps",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "sets",
    label: "Sets",
    minWidth: 170,
    align: "right"
  }
];

function createData(id, menu, part, weight, reps, sets, goal) {
  return { id, menu, part, weight, reps, sets, goal };
}

const rows = [
  createData("1", "this", "is example", 120, 10, 5),
  createData("2", "this", "is example", 120, 10, 5),
  createData("3", "this", "is example", 120, 10, 5),
  createData("4", "this", "is example", 120, 10, 5),
  createData("5", "this", "is example", 120, 10, 5),
  createData("6", "this", "is example", 120, 10, 5),
  createData("7", "this", "is example", 120, 10, 5)
];

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#b4b4b4",
    boxShadow: "none",
    border: "1px solid white"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  },
  text: {
    color: "white",
    fontSize: "15px"
  },
  header_text: {
    fontSize: "20px",
    fontStyle: "bold"
  },
  pag_text: {
    color: "white",
    fontSize: "15px"
  }
});

export default function StickyHeadTable() {
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
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  className={classes.header_text}
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
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          className={classes.text}
                          key={column.id}
                          align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        className={classes.text}
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
