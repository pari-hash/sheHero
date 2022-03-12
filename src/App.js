import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import CardList from "./components/Cards/CardList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
    };
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "signIn") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
       {this.state.route ==='home'
        ?<div>
            <Home />
            <CardList />
          </div>
        :<SignIn />
    }
    </div>
    );
  }
}

export default App;
