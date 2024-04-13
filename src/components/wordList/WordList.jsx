import React, { useState } from 'react';
import WordCard from '../wordCard/WordCard';
import styles from './wordList.module.css';
import data from '../../data/data.json';
import Button from '../buttons/Button';

function WordList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const words = data.words;

    const handleNextWord = () => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
    };

    const handlePrevWord = () => {
        setCurrentIndex((currentIndex) => (currentIndex - 1 + words.length) % words.length);

    };

    return (
        <div className={styles.wordList}>
            <Button className={styles.buttonPrev} onClick={handlePrevWord} buttonText="←"></Button>
            <WordCard key={currentIndex} word={words[currentIndex]} />
            <Button className={styles.buttonNext} onClick={handleNextWord} buttonText="→"></Button>
        </div >
    );
}

export default WordList;
