import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  grid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default function Translation(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} alignItems="center" className={classes.grid}>
      <Grid item xs={5}>
        <Typography>English</Typography>
        <TextField multiline rows={10} variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={2} classes={{ root: classes.root }}>
        <Button color="primary" variant="contained">
          Translate
        </Button>
      </Grid>

      <Grid item xs={5}>
        <Typography>French</Typography>
        <TextField multiline rows={10} variant="outlined" fullWidth />
      </Grid>
    </Grid>
  );
}
