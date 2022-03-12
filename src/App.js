import {React,  Component } from "react";
// import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import CardList from "./components/Cards/CardList";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import GovtSchemes from "./components/CardsPages/govtSchemes";
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      isSignedIn: false
    };
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "signIn"||route==='signUp') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.isSignedIn}/>
       {this.state.route ==='home'
        ?<div>
            <Home />
            <CardList />
            <About/>
          </div>
        :(this.state.route==='signIn'
        ?  <SignIn onRouteChange={this.onRouteChange}/>
          : 
          (this.state.route==='register'
?   <Register onRouteChange={this.onRouteChange}/>
: <GovtSchemes/> 
)
          )
  }
               
    </div>
    );
  }
}

export default App;
