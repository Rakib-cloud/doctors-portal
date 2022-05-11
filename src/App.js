
import './App.css';
import Navbar from './Page/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>

     <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
      
      </Routes>
    </div>
  );
}

export default App;
