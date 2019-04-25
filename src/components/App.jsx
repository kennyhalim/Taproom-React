import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SearchResults from "./SearchResults";
import About from "./About";

function App() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
              "Helvetica Neue", sans-serif;
          }
        `}
      </style>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
