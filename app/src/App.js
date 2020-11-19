import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return(
  <Router>
  <Navbar />
  <Footer />
  </Router>
  );
}

export default App;
