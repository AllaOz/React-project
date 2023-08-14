import React, { useState } from 'react';
import data from '../../data/data.json';
import styles from '../Body/body.module.scss';
import pencil from '../assets/images/pencil.png';
import check from '../assets/images/check-mark.png';
import close from '../assets/images/close.png';

function WordComponent() {
  const [editIndexItem, setEditIndexItem] = useState(-1);
  const [editedWord, setEditedWord] = useState({
    word: '',
    transcription: '',
    translation: '',
  })
  
  const [wordData, setWordData] = useState(data);
  const startEditingItem = (index) => {
    setEditIndexItem(index);
    const { word, transcription, translation } = data[index];
    setEditedWord({ word, transcription, translation });
      
  };

  const cancelEditingItem = () => {
    setEditIndexItem(-1);
    setEditedWord({
      word: '',
      transcription: '',
      translation: '',
    });
  };
  
  const updateWord = () => {
    const updatedData = wordData.map((item, index) => {
      if (index === editIndexItem) {
        return {
          id: item.id,
          word: editedWord.word,
          transcription: editedWord.transcription,
          translation: editedWord.translation,
        };
      } else {
        return item;
      }
    }); 
   
    setWordData(updatedData);
    setEditIndexItem(-1);
    setEditedWord({
      word: '',
      transcription: '',
      translation: '',
    });
  };

  const checkFieldEmpty = () => {
    return (
      editedWord.word.trim() === '' ||
      editedWord.transcription.trim() === '' ||
      editedWord.translation.trim() === ''
    );
  };

 
  
  return (
    <div className={styles.containerList}>
    <div className={styles.containerBox}>
    <div className={styles.body}>
      {wordData.map((item, index) => (
        <div key={item.id} className={styles.newString}>
          {editIndexItem === index ? (
            <>
              <input
                type="text"
                value={editedWord.word}
                onChange={(event) =>
                  setEditedWord({ ...editedWord, word: event.target.value })
                }
                className={
                  editedWord.word.trim() === '' ? styles.errorInput : ''
                }
              />
              <input
                type="text"
                value={editedWord.transcription}
                onChange={(event) =>
                  setEditedWord({ ...editedWord, transcription: event.target.value })
                }
                className={
                  editedWord.transcription.trim() === '' ? styles.errorInput : ''
                }
              />
              <input
                type="text"
                value={editedWord.translation}
                onChange={(event) =>
                  setEditedWord({ ...editedWord, translation: event.target.value })
                }
                className={editedWord.translation.trim() === '' ? styles.errorInput : ''}
        
              />
            </>
          ) : (
            <>

              <input type="text" value={item.word} readOnly />
              <input type="text" value={item.transcription} readOnly />
              <input type="text" value={item.translation} readOnly />
            </>
          )}
          {editIndexItem === index ? (
              <>
                <button className={styles.checkBtn} 
                onClick={updateWord}
                disabled={checkFieldEmpty()}>
                  <img src={check} alt="check icon" />
                </button>
                <button className={styles.editBtn} onClick={cancelEditingItem}>
                  <img src={close} alt="close icon to cancel editing" />
                </button>
              </>
            ) : (
              <>
                <button className={styles.checkBtn}
                 onClick={updateWord}
                 disabled={checkFieldEmpty()}>
                  <img src={check} alt="check icon" />
                </button>
                <button className={styles.editBtn} onClick={() => startEditingItem(index)}>
                  <img src={editIndexItem === index ? close : pencil} alt="pencil icon to edit" />
                </button>
            </>
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default WordComponent;
