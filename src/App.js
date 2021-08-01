import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Component outside of any Switch components are visible all the time */}
        <Navbar />

        <div className="content">
          {/* All routes' content will be injected into this "content" div */}
          {/* The Switch componet ensures that only one single route of all can be rendered */}
          <Switch>
            <Route path="/">
              {/* Only show the content of / route/endpoint when the user visits here */}
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
