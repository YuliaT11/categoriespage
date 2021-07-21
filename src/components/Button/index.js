import React from "react";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const CButton = ({ children, className, variant = "default", to = "", ...props }) => {
  const classes = useStyles();
  return !to ? (
    <Button
      {...props}
      className={`${classes.button} ${classes[variant]} ${className}`}
    >
      {children}
    </Button>
  ) : (
    <Link className={classes.link} to={to}>
      <Button
        {...props}
        className={`${classes.button} ${classes[variant]} ${className}`}
      >
        {children}
      </Button>
    </Link>
  );
};

export default CButton;
