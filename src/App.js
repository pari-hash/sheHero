import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from './components/Home/Home';
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
class App extends Component{
  constructor()
{
  super();
  this.state={
    route:'home',
    isSignedIn:false
  }
  this.onRouteChange = this.onRouteChange.bind(this);
}
onRouteChange=(route)=>
{
  if(route==='searchPage')
  {
    this.setState({isSignedIn:true});
  }
  this.setState({route:route});
}
  render(){
    return (
      <div className="App">
        <Navigation/>
        <Home />
        {/* <SignIn/> */}
        {/* <Register/> */}
      </div>
    );
  }
}

export default App;
