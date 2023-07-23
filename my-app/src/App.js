import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Cards from './components/Cards';
import NotFound from './components/NotFound';
import './App.module.scss';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />
  
        <Routes>
    
        <Route path="/React-project" element={<Body />} />
        <Route path="/" element={<Body />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/words" element={<Body />} />
        <Route path="*" element={<NotFound />} />
          
        </Routes>
    
        <Footer />
      </div>
    </Router>
  );
}

export default App;