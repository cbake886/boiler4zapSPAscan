import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  button : {
    marginBottom: theme.spacing(2)
  },
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
  },
  fullHeightBody: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  alignStandaloneElement: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
}));
