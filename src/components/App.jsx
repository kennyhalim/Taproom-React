import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import KegList from "./KegList";
import Error404 from "./Error404";

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
        <Route exact path="/keglist" component={KegList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
