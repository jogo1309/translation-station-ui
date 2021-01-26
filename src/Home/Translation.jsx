import {
  TextField,
  Grid,
  Button,
  Typography,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  select: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
}));

export default function Translation(props) {
  const Models = ["GRU", "LSTM", "BiDi"];
  const classes = useStyles();
  return (
    <>
      <div className={classes.select}>
        <InputLabel>Translation model: </InputLabel>
        <Select variant="outlined" style={{ minWidth: "15%" }}>
          {Models.map((model) => (
            <MenuItem value={model}>{model}</MenuItem>
          ))}
        </Select>
      </div>

      <Grid container spacing={3} alignItems="center">
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
    </>
  );
}
