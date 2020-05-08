import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import useLoginHandler from "../../hooks/UserAuth";
import useStyles from "./styles";
import logo from "./logo.svg";

import {
  useLoadingState,
} from "../../context/LoadingContext";

function Login(props) {
  var classes = useStyles();
  // local
  // eslint-disable-next-line
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  var loadingState = useLoadingState();
  const { onLogin } = useLoginHandler(props.history)

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(loginValue, passwordValue)
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer} style={{ zIndex: '1' }} >
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>repose</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Please try again.
                </Typography>
              </Fade>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="username"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  inputProps={{
                    maxLength: 30,
                    autoComplete: 'off'
                  }}
                  value={loginValue}
                  onChange={e => setLoginValue(e.target.value)}
                  margin="normal"
                  placeholder="Username"
                  type="text"
                  fullWidth
                />
                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  inputProps={{
                    type: "password",
                    maxLength: 64,
                    autoComplete: 'new-password'
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  placeholder="Password"
                  fullWidth
                />
                <div className={classes.formButtons}>
                  {loadingState.isLoading ? (<CircularProgress disableShrink size={26} className={classes.loginLoader} />
                  ) : (
                      <Button
                        disabled={loginValue.length === 0 || passwordValue.length === 0}
                        variant="contained"
                        type="submit"
                        color="primary"
                        size="large"
                      >
                        Login
                  </Button>
                    )}
                </div>
              </form>
            </React.Fragment>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
