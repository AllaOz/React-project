import React, { useState } from 'react';
import styles from './body.module.scss';
import bin from './assets/images/bin.png';
import pencil from './assets/images/pencil.png';
import check from './assets/images/check-mark.png';
import close from './assets/images/close.png';


function TranslationComponent() {
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [savedStrings, setSavedStrings] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);


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
    const newString = `${word} ${transcription} ${translation}`;
    setSavedStrings([...savedStrings, newString]);
    setWord('');
    setTranscription('');
    setTranslation('');
  };

  const deleteWord = (index) => {
    const deletedStrings = savedStrings.filter((_, i) => i !== index);
    setSavedStrings(deletedStrings);
    if (editIndex === index) {
      setEditIndex(-1);
    }
  };

  const startEditing = (index) => {
    setEditIndex(index);
    const [savedWord, savedTranscription, savedTranslation] = savedStrings[index].split(' ');
    setWord(savedWord);
    setTranscription(savedTranscription);
    setTranslation(savedTranslation);
  };

  const cancelEditing = () => {
    setEditIndex(-1);
    setWord('');
    setTranscription('');
    setTranslation('');
  };

  const updateWord = () => {
    const updatedString = `${word} ${transcription} ${translation}`;
    const updatedStrings = savedStrings.map((savedString, index) => {
      if (index === editIndex) {
        return updatedString;
      } else {
        return savedString;
      }
    });
    setSavedStrings(updatedStrings);
    setEditIndex(-1);
    setWord('');
    setTranscription('');
    setTranslation('');
  };
  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (editIndex === index) {
        updateWord();
      }
    }
  };
  
  return (
    <div className={styles.container}>
    <div className={styles.body}>
      <input 
      type="text" 
      value={word} 
      onChange={WordType} 
      placeholder="Enter word" />
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

      <div>
        {savedStrings.map((savedString, index) => {
          const [savedWord, savedTranscription, savedTranslation] = savedString.split(' ');
          return (
            <div key={index} className={styles.newString}>
              {editIndex === index ? (
                <>
                  <input 
                  type="text" 
                  value={word} 
                  onChange={WordType}
                  onKeyDown={(event) => handleKeyDown(event, index)} />
                  <input 
                  type="text" 
                  value={transcription} 
                  onChange={WordTranscription}
                  onKeyDown={(event) => handleKeyDown(event, index)} />
                  <input type="text"
                  value={translation}
                  onChange={WordTranslation}
                  onKeyDown={(event) => handleKeyDown(event, index)} />
                  
                </>
              ) : (
                <>
                  <input type="text" value={savedWord} readOnly />
                  <input type="text" value={savedTranscription} readOnly />
                  <input type="text" value={savedTranslation} readOnly />
                  
                </>
              )}
              {editIndex === index ? (
                <>
                  <button className={styles.checkBtn} onClick={updateWord}>
                    <img src={check} alt="check icon" />
                  </button>
                  <button className={styles.editBtn} onClick={cancelEditing}>
                    <img src={close} alt="close icon to cancel editing" />
                  </button>
                  <button className={styles.binBtn} onClick={() => deleteWord(index)}>
                    <img src={bin} alt="bin" />
                  </button>
                </>
              ) : (
                <>
                <button className={styles.editBtn} onClick={cancelEditing}>
                    <img src={check} alt="check mark icon" />
                  </button>
                  <button className={styles.editBtn} onClick={() => startEditing(index)}>
                    <img src={pencil} alt="pencil icon to edit" />
                  </button>
                  <button className={styles.binBtn} onClick={() => deleteWord(index)}>
                    <img src={bin} alt="bin" />
                  </button>

                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default TranslationComponent;
