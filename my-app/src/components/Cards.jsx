import React, { useState } from 'react';
import styles from './cards.module.scss';
import data from './data/data.json';

function CardList() {
  const { word, transcription, translation } = data[0];
  const [showTranslation, setShowTranslation] = useState(false);

  const handleToggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.card_words}>
        <div className={styles.card_word}>{word}</div>
        <div className={styles.card_transcription}>{transcription}</div>
        {showTranslation && (
          <div className={styles.card_translation}>{translation}</div>
        )}
        {!showTranslation && (
          <button className={styles.translateBtn} onClick={handleToggleTranslation}>
            Translate
          </button>
        )}
      </div>
    </div>
  );
}

export default CardList;
