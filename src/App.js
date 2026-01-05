
import './App.css';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
