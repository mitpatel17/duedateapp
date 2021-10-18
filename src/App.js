import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import app from "./Firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else {
      return setIsUserSignedIn(false);
    }
  });

  if (isUserSignedIn === true) {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home } />
        </Switch>
      </Router>
    );
  }
  else {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Signin} />
        </Switch>
      </Router>
    );
  }

}

export default App;
