import React, { useState } from 'react';
import styles from './wordCard.module.css';

function WordCard({ word }) {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleShowTranslation = () => {
        setShowTranslation(true);
    };

    return (
        <div className={styles.pageCenter}>
            <div className={styles.wordCard}>
                {word && (
                    <>
                        <div className={styles.wordBlock}>
                            <div className={styles.word}>{word.english.charAt(0).toUpperCase() + word.english.slice(1)}</div>
                            <div className={styles.transcription}>{word.transcription}</div>
                        </div>
                        {showTranslation
                            ? (<div className={styles.translation}>{word.russian.charAt(0).toUpperCase() + word.russian.slice(1)}</div>)
                            : (<button className={styles.checkButton} onClick={handleShowTranslation}>Проверить</button>)}
                    </>
                )}
            </div>
        </div>
    );
}

export default WordCard;
