import React, { useState, useEffect, createContext } from 'react';
import NotFound from '../NotFound/NotFound';
import Body from '../Body/Body';
import ListOfWords from '../ListOfWords/ListOfWords';

export const LanguageContext = createContext();

function LanguageChange() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [renderedComponent, setRenderedComponent] = useState(null);

  useEffect(() => {
    if (selectedLanguage === 'Russian') {
      setRenderedComponent(<NotFound />);
    } else {
      setRenderedComponent(
        <>
          <Body />
          <ListOfWords />
        </>
      );
    }
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {renderedComponent}
    </LanguageContext.Provider>
  );
}

export default LanguageChange;
