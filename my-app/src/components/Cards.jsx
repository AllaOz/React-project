import React, { useState } from 'react';
import styles from './cards.module.scss';
import data from './data/data.json';
import arrowleft from './assets/images/left-arrow.png';
import arrowright from './assets/images/right-arrow.png';

function CardList() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length);
    setShowTranslation(false);
  };

  const handlePreviousWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setShowTranslation(false);
  };

  const handleToggleTranslation = () => {
    setShowTranslation(!showTranslation);
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
        {showTranslation && (
          <div className={styles.card_translation}>{translation}</div>
        )}
         <button className={styles.translateBtn} onClick={handleToggleTranslation}>
        {showTranslation ? 'Hide Translation' : 'Show Translation'}
      </button>
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