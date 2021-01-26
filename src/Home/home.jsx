import React from "react";
import {
  Container,
  Divider,
  Paper,
  Typography,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Translation from "./Translation";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 5),
    flex: "1 1 auto",
    alignItems: "center",
    paddingBottom: theme.spacing(3),
    justifyContent: "space-between",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  select: {
    textAlign: "right",
    paddingTop: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  const Models = ["GRU", "LSTM", "BiDi"];

  return (
    <Container maxWidth="lg">
      <Paper>
        <div className={classes.root}>
          <Typography component="h4" variant="h4">
            Translation Station
          </Typography>

          <Divider />

          <Translation />
        </div>
      </Paper>
    </Container>
  );
}
