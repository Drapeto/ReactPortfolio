import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from "./pages/Contact";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/Portfolio" component={About} />
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
