import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import PropTypes from "prop-types";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles = makeStyles(theme => ({
  root: {
    width: "95%",
    margin: theme.spacing(9),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  menuTitle: {
    fontSize: "40px"
  },
  listText: {
    fontSize: "23px"
  }
}));

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'>
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'>
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'>
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

function WorkoutTable({
  openModal,
  setIsAddButton,
  setFormDataId,
  rows,
  deleteFormData
}) {
  const classes1 = useStyles();

  // const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Paper className={classes1.root}>
      <Table className={classes1.table}>
        <TableHead>
          <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell className={classes1.menuTitle} align='center'>
              Menu
            </TableCell>
            <TableCell className={classes1.menuTitle} align='center'>
              Part
            </TableCell>
            <TableCell className={classes1.menuTitle} align='right'>
              Weight
            </TableCell>
            <TableCell className={classes1.menuTitle} align='right'>
              Reps
            </TableCell>
            <TableCell className={classes1.menuTitle} align='right'>
              Sets
            </TableCell>
            <TableCell className={classes1.menuTitle} align='right'>
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
          {rows.map(row => (
            <TableRow key={row.id}>
              {/* <TableCell component='th' scope='row'>
                {row.id}
              </TableCell> */}
              <TableCell className={classes1.listText} align='center'>
                {row.menu}
              </TableCell>
              <TableCell className={classes1.listText} align='center'>
                {row.part}
              </TableCell>
              <TableCell className={classes1.listText} align='right'>
                {row.weight}
              </TableCell>
              <TableCell className={classes1.listText} align='right'>
                {row.reps}
              </TableCell>
              <TableCell className={classes1.listText} align='right'>
                {row.sets}
              </TableCell>
              <TableCell align='right'>
                {/* This is edit button */}
                <CreateIcon
                  color='secondary'
                  onClick={() => {
                    setIsAddButton(false);
                    openModal();
                    setFormDataId(row.id);
                  }}
                />
                <DeleteIcon
                  color='secondary'
                  onClick={() => deleteFormData(row.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}

export default WorkoutTable;
