import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function WorkoutTable({
  openModal,
  setIsAddButton,
  setFormDataId,
  rows,
  deleteFormData
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell align='right'>Menu</TableCell>
            <TableCell align='right'>Part</TableCell>
            <TableCell align='right'>Weight</TableCell>
            <TableCell align='right'>Reps</TableCell>
            <TableCell align='right'>Sets</TableCell>
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
          {rows.map(row => (
            <TableRow key={row.id}>
              {/* <TableCell component='th' scope='row'>
                {row.id}
              </TableCell> */}
              <TableCell align='right'>{row.menu}</TableCell>
              <TableCell align='right'>{row.part}</TableCell>
              <TableCell align='right'>{row.weight}</TableCell>
              <TableCell align='right'>{row.reps}</TableCell>
              <TableCell align='right'>{row.sets}</TableCell>
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
      </Table>
    </Paper>
  );
}

export default WorkoutTable;

// function WorkoutTable({
//   openModal,
//   setIsAddButton,
//   setFormDataId,
//   rows,
//   deleteFormData
// }) {
//   const classes = useStyles();
//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align='right'>BodyPart</TableCell>
//             <TableCell align='right'>Weight</TableCell>
//             <TableCell align='right'>Reps</TableCell>
//             <TableCell align='right'>Sets</TableCell>
//             <TableCell align='right'>Updated at</TableCell>
//             <TableCell align='right'>
//               <AddIcon
//                 color='primary'
//                 onClick={() => {
//                   openModal();
//                   setIsAddButton(true);
//                 }}
//               />
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component='th' scope='row'>
//                 {row.name}
//               </TableCell>
//               <TableCell align='right'>{row.bodypart}</TableCell>
//               <TableCell align='right'>{row.weight}</TableCell>
//               <TableCell align='right'>{row.reps}</TableCell>
//               <TableCell align='right'>{row.sets}</TableCell>
//               <TableCell align='right'>{row.updated}</TableCell>
//               <TableCell align='right'>
//                 {/* This is edit button */}
//                 <CreateIcon
//                   color='secondary'
//                   onClick={() => {
//                     setIsAddButton(false);
//                     openModal();
//                     setFormDataId(row.name);
//                   }}
//                 />
//                 <DeleteIcon
//                   color='secondary'
//                   onClick={() => deleteFormData(row.name)}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }
