import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        {/* <Navigation /> */}

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
