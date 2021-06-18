import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
        <Home/>
        
    </div>
    </Router>
  );
}

export default App;
