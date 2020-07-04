import React from "react";
import "./Container.scss";
import Home from "./home/Home";
import About from "./about me/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { Switch, Route } from "react-router-dom";

function Container() {

  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
