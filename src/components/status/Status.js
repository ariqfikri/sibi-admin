import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Line from "../chart/Line";
import Donut from "../chart/Donut";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Status() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        <Paper className={classes.paper}>Status</Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>Jumlah User</Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>Service yang sering digunakan</Paper>
        </Grid>
        <Grid item xs>
        <Paper className={classes.paper}>Refresh Service</Paper>
        </Grid>
      </Grid>
      <br></br>
      <Grid container spacing={3}>
      <Grid item xs>
          <Donut></Donut>
        </Grid>
        <Grid item xs>
          <Line></Line>
        </Grid>
      </Grid>
    </div>
  );
}
