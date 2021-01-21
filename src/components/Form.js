import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form({ handleSubmit, todo, isEdit }) {
  const [state, setState] = useState({
    title: undefined,
    description: undefined,
  });

  const classes = useStyles();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isEdit) {
      const { title, description } = todo;
      setState({
        title,
        description,
      });
    }
  }, [todo]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={handleOnChange}
        name="title"
        value={state.title}
        id="standard-basic"
        variant="outlined"
        label="Title"
      />
      <br />
      <TextField
        onChange={handleOnChange}
        value={state.description}
        name="description"
        id="standard-basic"
        label="Description"
        variant="outlined"
      />
      <br />
      <Button
        onClick={() => handleSubmit(state)}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
}
