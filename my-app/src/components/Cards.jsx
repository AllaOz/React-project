
import React, { useState } from 'react';
import styles from './cards.module.scss';
import data from './data/data.json';
import arrowleft from './assets/images/left-arrow.png';
import arrowright from './assets/images/right-arrow.png';



function CardList() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

  
    const handleNextWord = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1));
      setShowTranslation(false); 

      if (currentWordIndex === data.length - 1) {
        setCurrentWordIndex(0);
      }
      
    };
    const handlePreviousWord = () => {
        let newIndex = currentWordIndex - 1;
        if (newIndex < 0) {
          newIndex = data.length - 1;
        }
        setCurrentWordIndex((newIndex));
        setShowTranslation(false); 
      };
     
    
  
    const { word, transcription, translation } = data[currentWordIndex];
  
    const handleToggleTranslation = () => {
        setShowTranslation(!showTranslation);
      };

    return (
      <div className={styles.card_container}>
        <div>
        <button className={styles.nextBtn} onClick={handlePreviousWord}>
        <img src={arrowleft} alt="close icon to cancel editing" />
        </button>
        </div>
        <div className={styles.card_words}>
          <div className={styles.card_word}>{word}</div>
          <div className={styles.card_transcription}>{transcription}</div>
          {showTranslation && <div className={styles.card_translation}>{translation}</div>}
          {!showTranslation && (
            <button className={styles.translateBtn} onClick={handleToggleTranslation}>
              Translate
            </button>
            
          )}
        </div>
        <div>
        <button className={styles.nextBtn} onClick={handleNextWord}>
        <img src={arrowright} alt="close icon to cancel editing" />
        </button>
        </div>
       
      </div>
    );
  }
  
  export default CardList;
  