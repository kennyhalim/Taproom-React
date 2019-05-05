import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import KegList from "./KegList";
import KegData from "./KegData";
import EditKeg from "./EditKeg";
import Test from "./Test";
import NewKeg from "./NewKeg";
import Error404 from "./Error404";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: KegData,
      selectedKeg: null,
      selectedKegId: null
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
    this.handleDeletingKeg = this.handleDeletingKeg.bind(this);
    this.handleEditingKeg = this.handleEditingKeg.bind(this);
  }

  handleAddingNewKeg(newKeg) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({ masterKegList: newMasterKegList });
  }

  handleChangingSelectedKeg(keg, kegId) {
    this.setState({ selectedKeg: keg });
    this.setState({ selectedKegId: kegId });
  }

  handleDeletingKeg(newKegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    delete newMasterKegList[newKegId.kegId];
    this.setState({ masterKegList: newMasterKegList });
  }

  handleEditingKeg(kegToEdit) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[this.state.selectedKegId.kegId].name = kegToEdit.name;
    newMasterKegList[this.state.selectedKegId.kegId].brand = kegToEdit.brand;
    newMasterKegList[this.state.selectedKegId.kegId].price = kegToEdit.price;
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
            render={() => (
              <KegList
                kegs={this.state.masterKegList}
                onKegDeletion={this.handleDeletingKeg}
                onKegSelection={this.handleChangingSelectedKeg}
              />
            )}
          />
          <Route
            exact
            path="/test"
            render={() => <Test onNewKegCreation={this.handleAddingNewKeg} />}
          />
          <Route
            exact
            path="/NewKeg"
            render={() => <NewKeg onNewKegCreation={this.handleAddingNewKeg} />}
          />
          <Route
            exact
            path="/editkeg"
            render={() => (
              <EditKeg
                kegToEdit={this.state.selectedKeg}
                onKegEdit={this.handleEditingKeg}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
