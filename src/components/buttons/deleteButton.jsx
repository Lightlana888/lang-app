import React from 'react';
import styles from '../../assets/deleteButton.module.css';

function DeleteButton({ onClick }) {
    return (
        <button className={styles.deleteButton} onClick={onClick}>Удалить</button>
    );
}

export default DeleteButton;

