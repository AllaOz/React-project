import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Cards from './components/Cards/Cards';
import NotFound from './components/NotFound/NotFound';
import ListOfWords from './components/ListOfWords/ListOfWords';
import WordsContext from './components/WordsContext/WordsContext';
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
    const [wordData, setWordData] = useState([]);
  
    const apiUrl = 'http://itgirlschool.justmakeit.ru/api/words/';
  
    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setWordData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
  return (
    <WordsContext.Provider value={{ wordData }}>
    <Router>
      <div className="App">
        <Header />
        <Footer />

        <Routes>
        <Route path="/React-project" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Cards />} />
        <Route path="/words" element={<Main />} />
        <Route path="*" element={<NotFound />} />
          
        </Routes>
      
      </div>
    </Router>
    </WordsContext.Provider>
  );
}

export default App;