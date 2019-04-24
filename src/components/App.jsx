import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            font-family: sans-serif;
            background: #28547a;
          }
        `}
      </style>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
