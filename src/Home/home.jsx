import React from "react";
import {
  Container,
  Divider,
  Paper,
  Typography,
  Select,
  FormControl,
  MenuItem,
  FormLabel,
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
    flex: "1 1 auto",
    alignItems: "center",
    paddingBottom: theme.spacing(1),
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
          <div className={classes.top}>
            <Typography component="h4" variant="h4">
              Translation Station
            </Typography>

            <FormControl>
              <FormLabel component="label">Translation model: </FormLabel>
              <Select variant="outlined">
                {Models.map((model) => (
                  <MenuItem value={model}>{model}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Divider />

          <Translation />
        </div>
      </Paper>
    </Container>
  );
}
