import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Routes within the Switch component block will be compared against for matching in the order of top to bottom */}
          <Switch>
            {/* React Route matching checks each letters starting from left to right */}
            {/* Hence, when we try to go to "/create", React will show contents of "/" because the "/" route is matched first */}
            {/* Add "exact" to match the whole endpoint string exactly */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
