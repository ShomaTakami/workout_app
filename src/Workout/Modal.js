import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import uuid from "uuid/v1";

export default function FormDialog(props) {
  const { id, menu, part, weight, reps, sets } = props.formData;

  //*useState only sets default once
  const [menuValue, setMenuValue] = React.useState(menu);
  const [partValue, setPartValue] = React.useState(part);
  const [weightValue, setWeightValue] = React.useState(weight);
  const [repsValue, setRepsValue] = React.useState(reps);
  const [setsValue, setSetsValue] = React.useState(sets);

  // const uniqueKey = () => {
  //   if(id === null) {
  //     return uuid();
  //   } else {
  //     return id;
  //   }
  // }

  const save = () => {
    // 1. validation

    console.log({
      menu: menuValue,
      part: partValue,
      weight: weightValue,
      reps: repsValue,
      sets: setsValue
    });
    // 2. save data to redux
    if (props.isAddButton) {
      props.addFormData({
        id: uuid(),
        menu: menuValue,
        part: partValue,
        weight: weightValue,
        reps: repsValue,
        sets: setsValue
      });
    } else {
      //edit
      props.editFormData({
        id: id,
        menu: menuValue,
        part: partValue,
        weight: weightValue,
        reps: repsValue,
        sets: setsValue
      });
    }

    props.handleClose();
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={props.handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Add new menu</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              required={true}
              id='standard-required'
              label='Menu'
              className=''
              margin='normal'
              // fullWidth={true}
              value={menuValue}
              onChange={e => setMenuValue(e.target.value)}
              fullWidth
            />
            <TextField
              required={true}
              id='standard-required'
              label='Part'
              className=''
              margin='normal'
              // fullWidth={true}
              value={partValue}
              onChange={e => setPartValue(e.target.value)}
              fullWidth
            />
            <TextField
              required={true}
              id='standard-name'
              label='Weight'
              className=''
              value={weightValue}
              onChange={e => setWeightValue(e.target.value)}
              margin='normal'
              fullWidth
            />
            <TextField
              required={true}
              id='standard-name'
              label='Reps'
              className=''
              value={repsValue}
              onChange={e => setRepsValue(e.target.value)}
              margin='normal'
              fullWidth
            />
            <TextField
              required={true}
              id='standard-name'
              label='Sets'
              className=''
              value={setsValue}
              onChange={e => setSetsValue(e.target.value)}
              margin='normal'
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions className='Modal-DialogActions'>
          <Button color='primary' onClick={save}>
            Save
          </Button>
          <Button onClick={props.handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// import React from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// // import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// // import uuid from "uuid/v1";

// export default function FormDialog(props) {
//   const { name, bodypart, weight, reps, sets, updated, goal } = props.formData;

//   //*useState only sets default once
//   const [nameValue, setNameValue] = React.useState(name);
//   const [partValue, setPartValue] = React.useState(bodypart);
//   const [weightValue, setWeightValue] = React.useState(weight);
//   const [repValue, setRepValue] = React.useState(reps);
//   const [timeValue, setTimeValue] = React.useState(sets);
//   const [updatedValue, setUpdatedValue] = React.useState(updated);
//   const [goalValue, setGoalValue] = React.useState(goal);

//   const save = () => {
//     // 1. validation

//     console.log({
//       name: nameValue,
//       bodypart: partValue,
//       weight: weightValue,
//       reps: repValue,
//       sets: timeValue,
//       updated: updatedValue,
//       goal: goalValue
//     });
//     // 2. save data to redux
//     if (props.isAddButton) {
//       props.addFormData({
//         name: nameValue,
//         bodypart: partValue,
//         weight: weightValue,
//         reps: repValue,
//         sets: timeValue,
//         updated: updatedValue,
//         goal: goalValue
//       });
//     } else {
//       //edit
//       props.editFormData({
//         name: nameValue,
//         bodypart: partValue,
//         weight: weightValue,
//         reps: repValue,
//         sets: timeValue,
//         updated: updatedValue,
//         goal: goalValue
//       });
//     }

//     props.handleClose();
//   };

//   return (
//     <div>
//       <Dialog
//         open={true}
//         onClose={props.handleClose}
//         aria-labelledby='form-dialog-title'>
//         <DialogTitle id='form-dialog-title'>Add new issue</DialogTitle>
//         <DialogContent>
//           <form>
//             <TextField
//               autoFocus
//               required={true}
//               id='standard-required'
//               label='Name'
//               className=''
//               margin='normal'
//               fullWidth={true}
//               value={nameValue}
//               onChange={e => setNameValue(e.target.value)}
//             />
//             <TextField
//               required={true}
//               id='standard-required'
//               label='BodyPart'
//               className=''
//               margin='normal'
//               fullWidth={true}
//               value={partValue}
//               onChange={e => setPartValue(e.target.value)}
//             />
//             <TextField
//               required={true}
//               id='standard-name'
//               label='Weight'
//               className=''
//               value={weightValue}
//               onChange={e => setWeightValue(e.target.value)}
//               margin='normal'
//               fullWidth
//             />
//             <TextField
//               id='standard-name'
//               label='Reps'
//               className=''
//               value={repValue}
//               onChange={e => setRepValue(e.target.value)}
//               margin='normal'
//               fullWidth
//             />
//             <TextField
//               id='standard-name'
//               label='Sets'
//               className=''
//               value={timeValue}
//               onChange={e => setTimeValue(e.target.value)}
//               margin='normal'
//               fullWidth
//             />
//             <TextField
//               id='standard-name'
//               label='Updated At'
//               className=''
//               value={updatedValue}
//               onChange={e => setUpdatedValue(e.target.value)}
//               margin='normal'
//               fullWidth
//             />
//             <TextField
//               required={true}
//               id='standard-name'
//               label='Goal'
//               className=''
//               value={goalValue}
//               onChange={e => setGoalValue(e.target.value)}
//               margin='normal'
//               fullWidth
//             />
//           </form>
//         </DialogContent>
//         <DialogActions className='Modal-DialogActions'>
//           <Button color='primary' onClick={save}>
//             Save
//           </Button>
//           <Button onClick={props.handleClose} color='primary'>
//             Cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
