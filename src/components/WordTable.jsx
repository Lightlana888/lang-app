import React, { useState, useEffect } from 'react';
import wordsData from '../data/data.json';
import EditButton from './buttons/editButton';
import SaveButton from './buttons/saveButton';
import CancelButton from './buttons/cancelButton';
import DeleteButton from './buttons/deleteButton';
import AddButton from './buttons/addButton';
import styles from '../assets/wordTable.module.css';
import handleEdit from './handlers/handleEdit';
import handleSave from './handlers/handleSave';
import handleCancel from './handlers/handleCancel';
import handleDelete from './handlers/handleDelete';
import handleAdd from './handlers/handleAdd';
import handleChange from './handlers/handleChange';
import handleSaveNewWord from './handlers/handleSaveNewWord';

function WordTable({ defaultValues }) {
    const [editableWord, setEditableWord] = useState(null);
    const [newWord, setNewWord] = useState(defaultValues);
    const [wordsDataState, setWordsDataState] = useState(wordsData);
    const [showNewWordRow, setShowNewWordRow] = useState(false);

    useEffect(() => {

        localStorage.setItem('wordsData', JSON.stringify(wordsDataState));
    }, [wordsDataState]);

    useEffect(() => {

        setNewWord(defaultValues);
    }, [defaultValues]);


    const handleEditClick = (index) => {
        handleEdit(setEditableWord, setNewWord, wordsDataState, index);
    };

    const handleSaveClick = (index) => {
        handleSave(index, wordsDataState, newWord, setWordsDataState, setEditableWord, setNewWord);
    }

    const handleCancelClick = () => {
        handleCancel(setEditableWord, setNewWord);
    }

    const handleDeleteClick = (wordId) => {
        handleDelete(wordId, wordsDataState, setWordsDataState)
        console.log('Удаление слова с ID:', wordId);
    }

    const handleAddClick = () => {
        handleAdd(setShowNewWordRow, setNewWord);
    }

    const handleChangeClick = (e, field) => {
        handleChange(e, field, setNewWord, newWord);
    }

    const handleSaveNewWordClick = () => {
        handleSaveNewWord(wordsDataState, newWord, setWordsDataState, setShowNewWordRow, setNewWord)
    }

    return (
        <div className={styles.wordTable}>
            <h1>Список слов</h1>
            <table>
                <thead>
                    <tr>
                        <th>Английское слово</th>
                        <th>Транскрипция</th>
                        <th>Русское слово</th>
                        <th>Теги</th>
                        <th colSpan="2">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {wordsDataState.words.map((word, index) => (
                        <tr key={index}>
                            {editableWord === index ? (
                                <>
                                    <td><input value={newWord.english} onChange={(e) => handleChangeClick(e, 'english')} autoFocus /></td>
                                    <td><input value={newWord.transcription} onChange={(e) => handleChangeClick(e, 'transcription')} /></td>
                                    <td><input value={newWord.russian} onChange={(e) => handleChangeClick(e, 'russian')} /></td>
                                    <td><input value={newWord.tags} onChange={(e) => handleChangeClick(e, 'tags')} /></td>
                                    <td><SaveButton onClick={() => handleSaveClick(index)} /></td>
                                    <td><CancelButton onClick={handleCancelClick} /></td>
                                </>
                            ) : (
                                <>
                                    <td>{word.english}</td>
                                    <td>{word.transcription}</td>
                                    <td>{word.russian}</td>
                                    <td>{word.tags}</td>
                                    <td><EditButton onClick={() => handleEditClick(index)} /></td>
                                    <td><DeleteButton onClick={() => handleDeleteClick(word.id)} /></td>
                                </>
                            )}
                        </tr>
                    ))}
                    {showNewWordRow && (
                        <tr>
                            <td><input value={newWord.english} onChange={(e) => handleChangeClick(e, 'english')} autoFocus /></td>
                            <td><input value={newWord.transcription} onChange={(e) => handleChangeClick(e, 'transcription')} /></td>
                            <td><input value={newWord.russian} onChange={(e) => handleChangeClick(e, 'russian')} /></td>
                            <td><input value={newWord.tags} onChange={(e) => handleChangeClick(e, 'tags')} /></td>
                            <td><SaveButton onClick={handleSaveNewWordClick} /></td>
                            <td><CancelButton onClick={handleCancelClick} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <AddButton onAdd={handleAddClick} />
        </div>
    );
}

export default WordTable;
