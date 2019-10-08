import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import uuid from "uuid/v1";

export default function FormDialog(props) {
  const { name, bodypart, weight, reps, sets, updated } = props.formData;

  //*useState only sets default once
  const [nameValue, setNameValue] = React.useState(name);
  const [partValue, setPartValue] = React.useState(bodypart);
  const [weightValue, setWeightValue] = React.useState(weight);
  const [repValue, setRepValue] = React.useState(reps);
  const [timeValue, setTimeValue] = React.useState(sets);
  const [updatedValue, setUpdatedValue] = React.useState(updated);

  const save = () => {
    // 1. validation

    console.log({
      name: nameValue,
      bodypart: partValue,
      weight: weightValue,
      reps: repValue,
      sets: timeValue,
      updated: updatedValue
    });
    // 2. save data to redux
    if (props.isAddButton) {
      props.addFormData({
        name: nameValue,
        bodypart: partValue,
        weight: weightValue,
        reps: repValue,
        sets: timeValue,
        updated: updatedValue
      });
    } else {
      //edit
      props.editFormData({
        name: nameValue,
        bodypart: partValue,
        weight: weightValue,
        reps: repValue,
        sets: timeValue,
        updated: updatedValue
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
        <DialogTitle id='form-dialog-title'>Add new issue</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              required={true}
              id='standard-required'
              label='Name'
              className=''
              margin='normal'
              fullWidth={true}
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
            />
            <TextField
              required={true}
              id='standard-required'
              label='BodyPart'
              className=''
              margin='normal'
              fullWidth={true}
              value={partValue}
              onChange={e => setPartValue(e.target.value)}
            />
            <TextField
              id='standard-name'
              label='Weight'
              className=''
              value={weightValue}
              onChange={e => setWeightValue(e.target.value)}
              margin='normal'
              fullWidth
            />
            <TextField
              id='standard-name'
              label='Reps'
              className=''
              value={repValue}
              onChange={e => setRepValue(e.target.value)}
              margin='normal'
              fullWidth
            />
            <TextField
              id='standard-name'
              label='Sets'
              className=''
              value={timeValue}
              onChange={e => setTimeValue(e.target.value)}
              margin='normal'
              fullWidth
            />
            <TextField
              id='standard-name'
              label='Updated At'
              className=''
              value={updatedValue}
              onChange={e => setUpdatedValue(e.target.value)}
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
