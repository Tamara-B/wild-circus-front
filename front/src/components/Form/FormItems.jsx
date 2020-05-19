import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./FormItems.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  summaryField: {
    width: "50ch",
  },
}));

const FormInput = React.forwardRef(
  ({ placeholder, id, type, name, className, children }, ref) => {
    const classes = useStyles();
    return (
      <label htmlFor={id} className={classes.root}>
        <TextField
          type={type}
          id={id}
          placeholder={placeholder}
          label={placeholder}
          aria-label={placeholder}
          inputRef={ref}
          name={name}
          className={className}
          variant="outlined"
        >
          {children}
        </TextField>
      </label>
    );
  }
);

const FormDropDown = React.forwardRef(
  ({ register, options, name, value, ...rest }, ref) => {
    return (
      <select name={name} ref={register} {...rest}>
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    );
  }
);

const FormButton = ({ buttonText }) => {
  const classes = useStyles();
  return (
    <label className="button" htmlFor="button" className={classes.root}>
      <Button id="button" type="submit" variant="contained" color="primary">
        {buttonText}
      </Button>
    </label>
  );
};

export { FormInput, FormButton, FormDropDown };
