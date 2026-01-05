
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
