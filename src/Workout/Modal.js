import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import uuid from "uuid/v1";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  module: {
    width: "40%",
    margin: theme.spacing(9),
    overflowX: "auto",
    backgroundColor: "white"
  },
  title: {
    textAlign: "center",
    color: "#3F52B5"
  }
}));

export default function FormDialog(props) {
  const style = useStyles();

  const { id, menu, part, weight, reps, sets, goal } = props.formData;

  //*useState only sets default once
  const [menuValue, setMenuValue] = React.useState(menu);
  const [partValue, setPartValue] = React.useState(part);
  const [weightValue, setWeightValue] = React.useState(weight);
  const [repsValue, setRepsValue] = React.useState(reps);
  const [setsValue, setSetsValue] = React.useState(sets);
  const [goalValue, setGoalValue] = React.useState(goal);

  const save = () => {
    console.log({
      menu: menuValue,
      part: partValue,
      weight: weightValue,
      reps: repsValue,
      sets: setsValue,
      goal: goalValue
    });
    // 2. save data to redux
    if (props.isAddButton) {
      props.addFormData({
        id: uuid(),
        menu: menuValue,
        part: partValue,
        weight: weightValue,
        reps: repsValue,
        sets: setsValue,
        goal: goalValue
      });
    } else {
      //edit
      props.editFormData({
        id: id,
        menu: menuValue,
        part: partValue,
        weight: weightValue,
        reps: repsValue,
        sets: setsValue,
        goal: goalValue
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
        <DialogTitle id='form-dialog-title' className={style.title}>
          ADD NEW MENU
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              required={true}
              id='standard-required'
              label='Menu'
              className=''
              margin='normal'
              value={menuValue}
              onChange={e => setMenuValue(e.target.value)}
              fullWidth={true}
            />
            <TextField
              required={true}
              id='standard-required'
              label='Part'
              className=''
              margin='normal'
              value={partValue}
              onChange={e => setPartValue(e.target.value)}
              fullWidth={true}
            />
            <TextField
              type='number'
              required={true}
              id='standard-name'
              label='Weight (lbs)'
              className=''
              value={weightValue}
              onChange={e => setWeightValue(e.target.value)}
              margin='normal'
              fullWidth={true}
            />
            <TextField
              type='number'
              required={true}
              id='standard-name'
              label='Reps'
              className=''
              value={repsValue}
              onChange={e => setRepsValue(e.target.value)}
              margin='normal'
              fullWidth={true}
            />
            <TextField
              type='number'
              required={true}
              id='standard-name'
              label='Sets'
              className=''
              value={setsValue}
              onChange={e => setSetsValue(e.target.value)}
              margin='normal'
              fullWidth={true}
            />
            <TextField
              type='number'
              required={true}
              id='standard-name'
              label='Goal (lbs)'
              className=''
              value={goalValue}
              onChange={e => setGoalValue(e.target.value)}
              margin='normal'
              fullWidth={true}
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
