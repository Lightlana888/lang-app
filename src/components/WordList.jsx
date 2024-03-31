import React, { useState } from 'react';
import wordsData from '../data/data.json';
import EditButton from './buttons/editButton';
import SaveButton from './buttons/saveButton';
import CancelButton from './buttons/cancelButton';
import DeleteButton from './buttons/deleteButton';
import AddButton from './buttons/addButton';
import styles from '../assets/wordTable.module.css';

function WordList() {
    const [editableWord, setEditableWord] = useState(null);
    const [newWord, setNewWord] = useState({}); // Инициализация нового слова пустым объектом
    const [wordsDataState, setWordsDataState] = useState(wordsData);

    const handleEdit = (word) => {
        setEditableWord(word);
    };

    const handleSave = () => {
        const updatedWordsData = {
            ...wordsDataState,
            words: [...wordsDataState.words, { ...newWord, id: wordsDataState.words.length + 1 }]
        };
        // Обновление состояние JSON-файла после добавления нового слова
        setWordsDataState(updatedWordsData);
        setEditableWord(null);
        setNewWord({});
    };

    const handleCancel = () => {
        setEditableWord(null);
        setNewWord({}); // Очищение состояния нового слова после отмены
    };

    const handleDelete = (wordId) => {
        console.log('Удаление слова с ID:', wordId);
    };

    const handleAdd = () => {

        const newWordObject = {
            english: '',
            transcription: '',
            russian: '',
            tags: ''
        };
        setNewWord(newWordObject);
    };

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
                    {wordsDataState.words.map(word => (
                        <tr key={word.id}>
                            <td>{editableWord === word ? <input value={word.english} /> : word.english}</td>
                            <td>{editableWord === word ? <input value={word.transcription} /> : word.transcription}</td>
                            <td>{editableWord === word ? <input value={word.russian} /> : word.russian}</td>
                            <td>{word.tags}</td>
                            {editableWord === word ? (
                                <>
                                    <td><SaveButton onClick={handleSave} /></td>
                                    <td><CancelButton onClick={handleCancel} /></td>
                                </>
                            ) : (
                                <>
                                    <td><EditButton onClick={() => handleEdit(word)} /></td>
                                    <td><DeleteButton onClick={() => handleDelete(word.id)} /></td>
                                </>
                            )}
                        </tr>
                    ))}

                    {Object.keys(newWord).length !== 0 && (
                        <tr>
                            <td><input value={newWord.english} onChange={(e) => setNewWord({ ...newWord, english: e.target.value })} autoFocus /></td>
                            <td><input value={newWord.transcription} onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })} /></td>
                            <td><input value={newWord.russian} onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })} /></td>
                            <td><input value={newWord.tags} onChange={(e) => setNewWord({ ...newWord, tags: e.target.value })} /></td>
                            <td><SaveButton onClick={handleSave} /></td>
                            <td><CancelButton onClick={handleCancel} /></td>
                        </tr>
                    )}
                </tbody>
            </table>

            <AddButton onAdd={handleAdd} />
        </div>
    );
}

export default WordList;
