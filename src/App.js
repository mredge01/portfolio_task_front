import './App.css';
import Home from './Pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './util/Navbar';
import { useState } from 'react';
import Portfolio from './Pages/PortfolioPage';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className="app">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className={`page-content ${isOpen ? "shifted" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
