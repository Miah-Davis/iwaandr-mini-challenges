import React, { useState } from "react";
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Todo from "./exercises/BugFix";
import StateUpdate from "./exercises/StateUpdate";
import Foo from "./exercises/Foo";

enum TabOption {
  intro = "Intro",
  bugFix = "Bug Fix",
  stateUpdate = "State Update",
  foo = "Foo / Bar / Baz",
}

function App() {
  const [activeTab, setTab] = useState(TabOption.intro);

  return (
    <Container disableGutters>
      <Grid container direction="column" alignItems="center">
        <AppBar position="static" style={{ marginBottom: 25 }}>
          <Tabs value={activeTab}>
            <Tab
              label={TabOption.intro}
              onClick={() => setTab(TabOption.intro)}
              value={TabOption.intro}
            />
            <Tab
              label={TabOption.bugFix}
              value={TabOption.bugFix}
              onClick={() => setTab(TabOption.bugFix)}
            />
            <Tab
              label={TabOption.stateUpdate}
              value={TabOption.stateUpdate}
              onClick={() => setTab(TabOption.stateUpdate)}
            />
            <Tab
              label={TabOption.foo}
              value={TabOption.foo}
              onClick={() => setTab(TabOption.foo)}
            />
          </Tabs>
        </AppBar>
        {renderTab()}
      </Grid>
    </Container>
  );

  function renderTab(): React.ReactNode {
    switch (activeTab) {
      case TabOption.bugFix:
        return <Todo />;
      case TabOption.stateUpdate:
        return <StateUpdate />;
      case TabOption.foo:
        return <Foo />;
      case TabOption.intro:
      default:
        return (
          <Paper style={{ minHeight: 400, minWidth: 500, padding: 25 }}>
            <Grid container direction="column">
              <Typography
                align="center"
                variant="h3"
                style={{ marginBottom: 25 }}
              >
                iWaandr Take Home Project
              </Typography>

              <Typography paragraph component="div">
                Hi! Thank you for continuing with the iWaandr interview process
                and working on the take home project. The goal of this project
                is to solve several small challenges that give perspective into
                how you solve different types of problems.
              </Typography>
              <Typography
                align="center"
                variant="h4"
                style={{ margin: "25px 0px" }}
              >
                The Challenges
              </Typography>
              <Typography paragraph component="div">
                The projects are as follows:
                <ol>
                  <li>
                    <b>Bug fix:</b> Look through an existing piece of UI and
                    make adjustments to get it working as expected!
                  </li>
                  <li>
                    <b>State Update:</b> Hook checkboxes up to page state to get
                    the page to update when a checkbox is selected.
                  </li>
                  <li>
                    <b>Foo / Bar / Baz:</b> Write a basic algorithm that logs a
                    specific output.
                  </li>
                </ol>
              </Typography>
              <Typography paragraph component="div">
                This should only take ~3 hours of time. Each page (using the
                tabs above) has its own description as well. Make your changes
                in the code to meet achieve the challenge's goals.
              </Typography>
              <Typography paragraph component="div">
                Here are some final considerations:
                <ul>
                  <li>
                    <b>Style however you want</b>. The exercises should only
                    require minimal, if any, styling to complete. In the case
                    that styling is necessary, feel free to use the `style` prop
                    on the component (as seen in this pre-written code).
                  </li>
                  <li>
                    <b>Email us with questions</b>. If something is confusing or
                    ambiguous, it wasn't meant to be. Please let us know if this
                    is the case and we can talk through anything!
                  </li>
                  <li>
                    <b>Performance isn't important</b>. The main goal here is to
                    finish the exercises. If something seems like it could be a
                    performance rabbit hole, don't worry about it.
                  </li>
                </ul>
              </Typography>
              <Typography
                align="center"
                variant="h4"
                style={{ margin: "25px 0px" }}
              >
                Making Changes and Submitting
              </Typography>
              <Typography paragraph component="div">
                <ul>
                  <li>
                    <b>Making changes:</b>
                    <ol>
                      <li>
                        <b>Read the goals.</b> Navigate to the tab while the app
                        is being served. Each tab will have its own set of goals
                        that provide desired outcome of the challenge.
                      </li>
                      <li>
                        <b>Find the exercise file.</b> Each exercise has a file
                        in the `src/exercises` directory.
                      </li>
                      <li>
                        <b>Make changes in the code.</b> In the exercise file,
                        there are comments indicating the block of code related
                        to the exercise. Code outside of those comments are
                        related to the exercise description or layout. Make
                        changes directly in the code to complete the exercise.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <b>Submitting:</b>
                    <ol>
                      <li>
                        <b>
                          Make sure all of the exercise files include your
                          changes.
                        </b>
                      </li>
                      <li>
                        <b>Upload to Github or .zip and email.</b> For Github,
                        you can fork the repo and push up to that fork, create
                        your own new repo and push to that, or really anything.
                        The only request is that you do not submit a direct PR
                        against the base of the public repo. Another option is
                        that you can just zip your project and email it our way!
                        Really, whatever is easiest.
                      </li>
                      <li>
                        <b>Email us!</b> Regardless of the way you submit the
                        work, email us with information about where we can find
                        your project!
                      </li>
                    </ol>
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Paper>
        );
    }
  }
}

export default App;
