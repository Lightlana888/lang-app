import React from 'react';
import styles from '../../assets/editButton.module.css'

function EditButton({ onClick }) {
    return (
        <button className={styles.editButton} onClick={onClick}>Редактировать</button>
    );
}

export default EditButton;