import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TimerIcon from "@material-ui/icons/Timer";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    lineHeight: 14
  }
}));

function VirtualizedList({ match }) {
  const classes = useStyles();

  return (
    <List component='nav' className={classes.root} aria-label='contacts'>
      <ListItem button>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <Link to='/workout'>
          <ListItemText primary='Workout Menu' />
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <Link to='/record'>
          <ListItemText inset primary='Record' />
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <TimerIcon />
        </ListItemIcon>
        <Link to='/timer'>
          <ListItemText inset primary='Timer' />
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>{" "}
        <Link to='/calendar'>
          <ListItemText inset primary='Calendar' />
        </Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <Link to='/account'>
          <ListItemText inset primary='Account' />
        </Link>
      </ListItem>
    </List>
  );
}

export default withRouter(VirtualizedList);
