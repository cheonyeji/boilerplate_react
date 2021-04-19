import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import DrawPage from './components/views/DrawPage/DrawPage'
import WorkingPage from "./components/views/workingPage/WorkingPage";

function App() {
  return (
    
    <Router>
    <div>
      
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/draw" component={DrawPage} />
        <Route exact path="/work" component={WorkingPage} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
