import React, { useState } from 'react';
import styles from './body.module.scss';
import bin from './assets/images/bin.png';

function TranslationComponent(props) {
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [savedStrings, setSavedStrings] = useState([]);

  const WordType = (event) => {
    setWord(event.target.value);
  };

  const WordTranscription = (event) => {
    setTranscription(event.target.value);
  };

  const WordTranslation = (event) => {
    setTranslation(event.target.value);
  };

  const saveWord = () => {
    const newString = `${word} [${transcription}] ${translation}`;
    setSavedStrings([...savedStrings, newString]);
    setWord('');
    setTranscription('');
    setTranslation('');
  };

  const deleteWord = (index) => {
    const deletedStrings = savedStrings.filter((_, i) => i !== index);
    setSavedStrings(deletedStrings);
  };

  return (
    <div className={styles.body}>
      <input
        type="text"
        value={word}
        onChange={WordType}
        placeholder="Enter word"
      />
      <input
        type="text"
        value={transcription}
        onChange={WordTranscription}
        placeholder="transcription"
      />
      <input
        type="text"
        value={translation}
        onChange={WordTranslation}
        placeholder="translation"
      />

      <button className={styles.saveBtn} onClick={saveWord}>
        Save
      </button>
      <div className={styles.savedWords}>
        {savedStrings.map((savedString, index) => {
          const [savedWord, savedTranscription, savedTranslation] = savedString.split(' ');
          return (
            <div key={index} className={styles.newString}>
              <input type="text" value={savedWord} readOnly />
              <input type="text" value={savedTranscription} readOnly />
              <input type="text" value={savedTranslation} readOnly />
              <button className={styles.binBtn} onClick={() => deleteWord(index)}>
                <img src={bin} className={styles.bin} alt="bin" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TranslationComponent;
