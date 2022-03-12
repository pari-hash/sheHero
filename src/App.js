import React, { Component } from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import CardList from "./components/Cards/CardList";

import About from "./components/About/About"
import CardEle from "./components/CardsPages/CardEle";
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
            <About/>
          </div>
        :<SignIn />
    }
        <Routes>
      <Route exact path="/shows" element={  <CardEle />} />    
       </Routes>
    </div>
    );
  }
}

export default App;
