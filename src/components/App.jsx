import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import KegList from "./KegList";
import KegData from "./KegData";
import NewKeg from "./NewKeg";
import Error404 from "./Error404";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: KegData
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
  }

  handleAddingNewKeg(newKeg) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
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
          <Route
            exact
            path="/keglist"
            render={() => <KegList kegs={this.state.masterKegList} />}
          />
          <Route
            exact
            path="/NewKeg"
            render={() => <NewKeg onNewKegCreation={this.handleAddingNewKeg} />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
