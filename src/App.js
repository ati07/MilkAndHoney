import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About Us/About";
import Services from "./Pages/Services/Services";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header clr={'rgba(234, 236, 239, 0.35)'}/>
            <Home />
          </Route>
          
          <Route path="/about">
          <Header  clr={"#a2cbd0"}/>
            <About />
          </Route>
          <Route path="/services" >
            <Header clr={'rgba(234, 236, 239, 0.35)'}/>
            <Services />
          </Route>
          <Route path="/work">
            <Header clr={'rgba(234, 236, 239, 0.35)'}/>
            <Services />
          </Route>
          <Route path="/connect">
            <Header clr={'rgba(234, 236, 239, 0.35)'}/>
            <Services />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
