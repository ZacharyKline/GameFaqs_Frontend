import React, { Component } from 'react';
import '../styles/App.css';
import { Route, Switch } from "react-router-dom";

// import { Header } from "./components/Header"
import {
  BoardPage,
  ContributionPage,
  GamesPage,
  HomePage,
  LoginPage,
  PlatformPage,
  PollsPage,
  RegistrationPage,
  UserAccountPage
} from "./pages"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <div>
          {
            <Switch>

              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <HomePage />
                  </React.Fragment>
                )}
              />

              <Route
                exact
                path={"/board"}
                render={props => (
                  <React.Fragment>
                    <BoardPage />
                  </React.Fragment>
                )}
              />

              <Route
                exact
                path={"/contribution"}
                render={props => (
                  <React.Fragment>
                    <ContributionPage />
                  </React.Fragment>
                )}
              />

              <Route
                path={"/registration"}
                render={props => (
                  <React.Fragment>
                    <RegistrationPage />
                  </React.Fragment>
                )}
              />

              <Route
                path={"/userAccount"}
                render={props => (
                  <React.Fragment>
                    <UserAccountPage />
                  </React.Fragment>
                )}
              />

              <Route
                path={"/games"}
                render={props => (
                  <React.Fragment>
                    <GamesPage />
                  </React.Fragment>
                )}
              />

              <Route
                path={"/login"}
                render={props => (
                  <React.Fragment>

                    <LoginPage />
                  </React.Fragment>
                )}
              />

              {/* <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              />


              <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              />

              <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              />

              <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              />
              <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              />

              <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              />

              <Route
                path={"/ "}
                render={props => (
                  <React.Fragment>

                  </React.Fragment>
                )}
              /> */}

            </Switch>
          }
        </div>
      </React.Fragment>
    );
  }
}
export default App;
