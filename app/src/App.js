import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home.js";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
function App() {
  return(
  <Router>
  <Navbar />
  <Switch>
    <Route exact path="/">
       <Home /> 
    </Route>
    {/* <Route exact path="/portfolio">
      <Portfolio />
    </Route>
    <Route exact path="/contact">
      <Contact />
    </Route> */}
  </Switch>
  <Footer />
  </Router>
  );
}

export default App;
