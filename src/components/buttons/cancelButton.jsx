import React from 'react';
import styles from '../../assets/cancelButton.module.css';

function CancelButton({ onClick }) {
    return (
        <button className={styles.cancelButton} onClick={onClick}>Отмена</button>
    );
}

export default CancelButton;
