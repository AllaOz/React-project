
import React, { useState } from 'react';
import styles from './cardsslider.module.scss';
import data from './data/data.json';
import arrowleft from './assets/images/left-arrow.png';
import arrowright from './assets/images/right-arrow.png';



function CardList() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
   
  
    const handleNextWord = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1));

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
    
      };
     
    
  
    const { word, transcription, translation } = data[currentWordIndex];
  
    

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
          <div className={styles.card_tranlation}>{translation}</div>
         
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
  