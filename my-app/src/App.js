import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Cards from './components/Cards';
import NotFound from './components/NotFound';
import ListOfWords from './components/ListOfWords';
import './App.module.scss';

function Main() {
  return (
    <>
      <Body />
      <ListOfWords />
    </>
  );
}

function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />
        <Footer />

        <Routes>
        <Route path="/React-project" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/words" element={<Main />} />
        <Route path="*" element={<NotFound />} />
          
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;