import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import styles from './cards.module.scss';
import data from './data/data.json';
import arrowleft from './assets/images/left-arrow.png';
import arrowright from './assets/images/right-arrow.png';

  
function CardList() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [learnedWords, setLearnedWords] = useState(0);
  const translateBtnRef = useRef(null);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length);
    setShowTranslation(false);
    translateBtnRef.current.focus();
  };

  const handlePreviousWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setShowTranslation(false);
  };

  const handleToggleTranslation = () => {
    setShowTranslation(!showTranslation); 
    if (!showTranslation) {
      if (!showTranslation) {
        setLearnedWords((prevCount) => prevCount + 1); 
      }
      translateBtnRef.current.blur();
    }
    
  };

  useEffect(() => {
    translateBtnRef.current.focus();
  }, [currentWordIndex]);


  return (
    <div>
      <div className={styles.learnedWords}>You've learned {learnedWords} words</div>
    <div className={styles.card_container}>
     
        <button className={styles.nextBtn} onClick={handlePreviousWord} >
          <img src={arrowleft} alt="close icon to cancel editing" />
        </button>
      

      {data.map((item, index) => (
        index === currentWordIndex && (
          
            <div key={item.id} className={styles.card_words}>
            <div className={styles.card_word}>{item.word}</div>
            <div className={styles.card_transcription}>{item.transcription} </div>
            
            {showTranslation && (
              <div className={styles.card_translation}>{item.translation}</div>
            )}
            
            
            <button 
            className={styles.translateBtn} 
            ref={translateBtnRef}
            onClick={handleToggleTranslation}> 
              {showTranslation ? 'Hide Translation' : 'Show Translation'}
            </button>
            
          </div>
        )
      ))}
  
        <button className={styles.nextBtn} onClick={handleNextWord}>
          <img src={arrowright} alt="close icon to cancel editing" />
        </button>
     
       
      </div>   
    </div>
   
     
  );
}

export default CardList;
