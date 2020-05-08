import React from "react";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux'
// components
import Layout from "./Layout";


// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context

export default function App() {
  // global

  const currentExp = useSelector(state => state.exp)
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          currentExp.auth ? (
            React.createElement(component, props)
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          currentExp.auth ? (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
