
import './App.css';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
