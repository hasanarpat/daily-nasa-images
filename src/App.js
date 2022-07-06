import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./Home/Home";
import { Archive } from "./Archive/Archive";
import {Single} from "./Single/Single";

function App() {
  return (
  <Router>
    <div className="nav">
      <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"></img>
      <Link to="/">HOME</Link>
      <Link to="/archive">ARCHIVE</Link>
    </div>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path="/single/:date" element={<Single />}/>
    </Routes>
    <div className="footer" >
    <a href="https://github.com/theakhilleus">
    <h5 style={{color:"#fff"}}>Contact</h5>
    <img style={{maxWidth:"50px"}} src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />
    </a>
    </div>
  </Router>
  
  );
}

export default App;
