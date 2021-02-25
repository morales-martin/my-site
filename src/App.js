import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import WorkExperience from "./components/pages/WorkExperience";
import Education from "./components/pages/Education";
import Hobbies from "./components/pages/Hobbies";
import Volunteer from "./components/pages/Volunteer";
import Accomplishments from "./components/pages/Accomplishments";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work-experience" exact component={WorkExperience} />
          <Route path="/education" exact component={Education} />
          <Route path="/hobbies" exact component={Hobbies} />
          <Route path="/volunteer" exact component={Volunteer} />
          <Route path="/accomplishments" exact component={Accomplishments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
