// https://github.com/iamshaunjp/Complete-React-Tutorial

import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReviewDetailsPage from "./pages/ReviewDetailsPage";
import "./index.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import UpdateBLog from "./components/UpdateBLog";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/update/:id">
              <UpdateBLog />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

// we can't print object and boolena
// so a compontent is a funtion which must retur something generally the jsx templatee

//This is jsx it allows to create this cool stuff and in background babble convert the code into the Html so in jsx we used className insted class "Babble do the lot of stuff behide the screen"
