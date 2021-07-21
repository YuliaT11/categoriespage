import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  button: {
    height: "48px",
    minWidth: "unset",
    borderRadius: 8,
    width: "100%",
    textTransform: "initial",
  },
  primary: {
    background: "#F36B32",
    color: "white",
    border: "1px solid #F36B32",
    "&:hover": {
      color: "#F36B32",
    },
  },
  secondary: {
    background: "#495B71",
    color: "white",
    border: "1px solid #495B71",
  },
  outlined: {
    background: "transparent",
    color: "white",
    border: "1px solid #FFF",
  },
  default: {
    background: "white",
    color: "#F36B32",
    border: "1px solid #F36B32",
  },
  link: {
    textDecoration: "none",
  },
});
