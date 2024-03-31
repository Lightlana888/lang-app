
import React from 'react';
import styles from '../../assets/addButton.module.css';

function AddButton({ onAdd }) {
    const handleClick = () => {
        onAdd();
    };

    return (
        <div>
            <button className={styles.addButton} onClick={handleClick}>Добавить слово</button>
        </div>
    );
}

export default AddButton;
