import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import styles from '../assets/wordCard.module.css';

function WordCard() {
    const [showTranslation, setShowTranslation] = useState(false);
    const [currentWord, setCurrentWord] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * data.words.length);
        setCurrentWord(data.words[randomIndex]);
    }, []);

    const handleShowTranslation = () => {
        setShowTranslation(true);
    };

    return (
        <div className={styles.pageCenter}>
            <div className={styles.wordCard}>
                {currentWord && (
                    <>
                        <div className={styles.wordBlock}>
                            <div className={styles.word}>{currentWord.english.charAt(0).toUpperCase() + currentWord.english.slice(1)}</div>
                            <div className={styles.transcription}>{currentWord.transcription}</div>
                        </div>
                        {showTranslation
                            ? (<div className={styles.translation}>{currentWord.russian.charAt(0).toUpperCase() + currentWord.russian.slice(1)}</div>
                            )
                            : (
                                <button className={styles.checkButton} onClick={handleShowTranslation}>Проверить</button>
                            )}

                    </>
                )}
            </div>
        </div>
    );
}

export default WordCard;
