import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Cards from './components/Cards';
import Cardsslider from './components/Cardsslider';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Body/>
      <Footer/>
      <Cards/>
      <Cardsslider/>
        
    </div>
  );
}

export default App;
