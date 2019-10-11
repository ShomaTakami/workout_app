import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "../login/Loginform.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            style={{
              textAlign: "center"
            }}
            className={classes.title}>
            Workout App
          </Typography>
          <Button color='inherit' id='myBtn'>
            Login
            <div id='myModal' className='modal'>
              <span className='close'>&times;</span>

              <form className='modal-content animate' action='/action_page.php'>
                <div className='imgcontainer'>
                  <img src='img_avatar2.png' alt='Avatar' className='avatar' />
                </div>

                <div className='container'>
                  <label htmlFor='uname'>
                    <b>Username</b>
                  </label>
                  <input
                    type='text'
                    placeholder='Enter Username'
                    name='uname'
                    required
                  />

                  <label htmlFor='psw'>
                    <b>Password</b>
                  </label>
                  <input
                    type='password'
                    placeholder='Enter Password'
                    name='psw'
                    required
                  />

                  <button type='submit'>Login</button>
                  <label>
                    <input type='checkbox' checked='checked' name='remember' />{" "}
                    Remember me
                  </label>
                </div>

                <div
                  className='container'
                  style={{ backgroundColor: "#f1f1f1" }}>
                  <button
                    type='button'
                    onClick="document.getElementById('id01').style.display='none'"
                    className='cancelbtn'>
                    Cancel
                  </button>
                </div>
              </form>
            </div>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
