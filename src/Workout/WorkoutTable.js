import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import AddIcon from "@material-ui/icons/Add";
import TodayIcon from "@material-ui/icons/Today";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

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
    align: "right",
    format: value => value.toFixed(2)
  }
];

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "45px auto",
    backgroundColor: "#b4b4b4",
    boxShadow: "none",
    position: "relative"
  },
  tableWrapper: {
    // maxHeight: 500
  },
  table: {
    border: "1px solid white"
  },
  text: {
    fontSize: "20px",
    color: "#b4b4b4"
  },
  list: {
    fontSize: "15px",
    color: "white",
    marginTop: "10px",
    marginBottom: "10px"
  },
  pagination: {
    fontSize: "15px",
    color: "white"
    // paddingTop: "25px",
    // paddingBottom: "25px"
  },
  icons: {
    marginRight: "15px"
  }
});

function WorkoutTable({
  openModal,
  setDate,
  setIsAddButton,
  setFormDataId,
  addToCalendar,
  rows,
  deleteFormData
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.text}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell align='right'>
                <AddIcon
                  color='primary'
                  onClick={() => {
                    openModal();
                    setIsAddButton(true);
                  }}
                />
              </TableCell>
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
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={classes.list}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align='right'>
                      <TodayIcon
                        //TODO If this icon clicked, pass the data of list to calendar.
                        className={classes.icons}
                        color='secondary'
                        onClick={() => {
                          setDate(true);
                          setFormDataId(row.id);
                        }}
                      />
                      <CreateIcon
                        className={classes.icons}
                        color='secondary'
                        onClick={() => {
                          setIsAddButton(false);
                          openModal();
                          setFormDataId(row.id);
                        }}
                      />
                      <DeleteIcon
                        className={classes.icons}
                        color='secondary'
                        onClick={() => deleteFormData(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TablePagination
            className={classes.pagination}
            rowsPerPageOptions={[10, 5]}
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
        </Table>
      </div>
    </Paper>
  );
}

export default WorkoutTable;
