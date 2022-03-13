
import {React,  Component } from "react";
// import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import CardList from "./components/Cards/CardList";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Schemes from "./components/CardsPages/Schemes";
import Blogs from "./components/CardsPages/Blogs";
import NGOs from "./components/CardsPages/NGOs";
import Opportunities from "./components/CardsPages/Opportunities";
import Jobs from "./components/CardsPages/Jobs";
import Footer from './components/Footer/footer.component'
import { useState } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      isSignedIn: false,
    };
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  handleOnSubmit = async (e) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    e.preventDefault();
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved successfully");
      setEmail("");
      setName("");
    }
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "signIn" || route === "signUp") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.isSignedIn}
        />
        {this.state.route === "home" ? 
          <div>
            <Home />
            <CardList onRouteChange={this.onRouteChange}/>

            <About />
            <Footer/>

          </div>
       : (this.state.route === "signIn" ? 
          <SignIn onRouteChange={this.onRouteChange} />
         : (this.state.route === "register" ? 
          <Register
            handleOnSubmit={this.handleOnSubmit}
            onRouteChange={this.onRouteChange}
          /> : (this.state.route === "Schemes" ? 
          <Schemes />: (this.state.route === "Jobs" ? 
          <Jobs />
         : (this.state.route === "NGOs" ? 
          <NGOs />
         : (this.state.route === "Opportunities" ? 
          <Opportunities />:<Blogs />
         ))))))
    }        
    </div>
    );
  }
}

export default App;
