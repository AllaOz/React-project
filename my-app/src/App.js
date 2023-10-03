import React, { useState, useEffect, useContext  } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {LanguageContext} from './components/LanguageContext/LanguageContext';
import Body from './components/Body/Body';
import Cards from './components/Cards/Cards';
import NotFound from './components/NotFound/NotFound';
import ListOfWords from './components/ListOfWords/ListOfWords';
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

    const selectedLanguage = useContext(LanguageContext);
  
  return (
    <LanguageContext.Provider value = {{selectedLanguage }}>
    <Router>
      <div className="App">
        <Header />
        <Footer />

        <Routes>
        <Route path="/React-project" element={<Main wordData={wordData} />} />
        <Route path="/" element={<Main wordData={wordData}n />} />
        <Route path="/game" element={<Cards />} />
        <Route path="/words" element={<Main wordData={wordData} />} />
        <Route path="*" element={<NotFound />} />
        {selectedLanguage === 'Russian' && <Route path="*" element={<NotFound />} />}
          
        </Routes>
      
      </div>
    </Router>
    </LanguageContext.Provider>
  );
}

export default App;