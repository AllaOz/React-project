import React, { useState, useEffect } from 'react';
import styles from '../Body/body.module.scss';
import pencil from '../assets/images/pencil.png';
import check from '../assets/images/check-mark.png';
import close from '../assets/images/close.png';


function WordComponent() {
  const [editIndexItem, setEditIndexItem] = useState(-1); 
  const [editedWord, setEditedWord] = useState({
    english: '',
    transcription: '',
    russian: '',
  });

  const [wordData, setWordData] = useState([]);

  useEffect(() => {
    fetch('https://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => setWordData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const startEditingItem = (index) => {
    setEditIndexItem(index);
    const { english, transcription, russian } = wordData[index];
    setEditedWord({english, transcription,russian });
  };

  const cancelEditingItem = () => {
    setEditIndexItem(-1); 
    setEditedWord({
      english: '',
      transcription: '',
      russian: '',
    });
  };

  const updateWord = () => {
    const updatedData = wordData.map((item, index) => {
      if (index === editIndexItem) {
        return {
          ...item,
          english: editedWord.english,
          transcription: editedWord.transcription,
          russian: editedWord.russian,
        };
      } else {
        return item;
      }
     

    });

    setWordData(updatedData);
    setEditIndexItem(-1);
    setEditedWord({
      english: '',
      transcription: '',
      russian: '',
    });
  };

  const checkFieldEmpty = () => {
    return (
      editedWord.english.trim() === '' ||
      editedWord.transcription.trim() === '' ||
      editedWord.russian.trim() === ''
    );
  };

  function ErrorMessage({ error }) {
    return <span className={styles.errorMessage}>{error}</span>;
  }

  const emptyFieldMessage = "Error: please, fill in all fields";

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
                    value={editedWord.english}
                    onChange={(event) =>
                      setEditedWord({ ...editedWord, english: event.target.value })
                    }
                    className={
                      editedWord.english.trim() === '' ? styles.errorInput : ''
                    }
                  />
                   {editedWord.english.trim() === '' && (
                <ErrorMessage error={emptyFieldMessage} />
              )}

                  <input
                    type="text"
                    value={editedWord.transcription}
                    onChange={(event) =>
                      setEditedWord({
                        ...editedWord,
                        transcription: event.target.value,
                      })
                    }
                    className={
                      editedWord.transcription.trim() === ''
                        ? styles.errorInput
                        : ''
                    }
                  />
                   {editedWord.transcription.trim() === '' && (
                <ErrorMessage error={emptyFieldMessage} />
              )}
                  
                  <input
                    type="text"
                    value={editedWord.russian}
                    onChange={(event) =>
                      setEditedWord({
                        ...editedWord,
                        russian: event.target.value,
                      })
                    }
                    className={
                      editedWord.russian.trim() === ''
                        ? styles.errorInput
                        : ''
                    }
                  />
                   {editedWord.russian.trim() === '' && (
                  <ErrorMessage error={emptyFieldMessage} />
                )}
                </>
                
              ) : (
                <>
                  <input type="text" value={item.english} readOnly />
                  <input type="text" value={item.transcription} readOnly />
                  <input type="text" value={item.russian} readOnly />
                </>
              )}
              {editIndexItem === index ? (
                <>
                  <button
                    className={`${styles.checkBtn} ${
                      checkFieldEmpty() ? styles.disabled : ''
                    }`}
                    onClick={updateWord}
                    disabled={checkFieldEmpty()}
                  >
                    <img src={check} alt="check icon" />
                  </button>
                  <button className={styles.editBtn} onClick={cancelEditingItem}>
                    <img
                      src={close}
                      alt="close icon to cancel editing"
                    />
                    
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={`${styles.checkBtn} ${
                      checkFieldEmpty() ? styles.disabled : ''
                    }`}
                    onClick={updateWord}
                    disabled={checkFieldEmpty()}
                  >
                    <img src={check} alt="check icon" />
                  </button>
                  <button
                    className={styles.editBtn}
                    onClick={() => startEditingItem(index)}
                  >
                    <img
                      src={editIndexItem === index ? close : pencil}
                      alt="pencil icon to edit"
                    />
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
