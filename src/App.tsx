import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { GetBoutique } from "./redux/actions/BoutiqueAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Boutique from "./components/Boutique";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./reusables/Footer";
import Slider from "./reusables/Slider";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBoutique());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Slider />
        <div className="position-relative">
          <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/boutique" component={Boutique} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
