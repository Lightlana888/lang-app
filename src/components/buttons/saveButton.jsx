import React from 'react';
import styles from '../../assets/saveButton.module.css'

function SaveButton({ onClick }) {
    return (
        <button className={styles.saveButton} onClick={onClick}>Сохранить</button>
    );
}

export default SaveButton;
