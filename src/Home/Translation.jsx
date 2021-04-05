import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import TranslateIcon from "@material-ui/icons/Translate";
import translateAPI from "./API/translate";
import SnackbarUtils from "./SnackbarUtils";

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
  const [transVals, setTransVals] = useState({ eng: "", fr: "" });

  const { model } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransVals({ ...transVals, [name]: value });
  };

  const translate = async (e) => {
    if (transVals.eng) {
      const fr = await translateAPI(transVals.eng, model);
      fr
        ? setTransVals({ ...transVals, fr: fr.fr })
        : setTransVals({ ...transVals, fr: "" });
    } else {
      SnackbarUtils.warning(
        "Warning: No english text entered! Please enter some text and try again."
      );
    }
  };

  return (
    <Grid container spacing={3} alignItems="center" className={classes.grid}>
      <Grid item xs={5}>
        <Typography>English</Typography>
        <TextField
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          name="eng"
          value={transVals.eng}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={2} classes={{ root: classes.root }}>
        <Button
          color="primary"
          variant="contained"
          endIcon={<TranslateIcon />}
          onClick={translate}
        >
          Translate
        </Button>
      </Grid>

      <Grid item xs={5}>
        <Typography>French</Typography>
        <TextField
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          disabled
          name="fr"
          value={transVals.fr}
        />
      </Grid>
    </Grid>
  );
}
