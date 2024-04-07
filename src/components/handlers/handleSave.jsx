const handleSave = (index, wordsDataState, newWord, setWordsDataState, setEditableWord, setNewWord) => {
    const updatedWords = [...wordsDataState.words];
    updatedWords[index] = newWord;
    setWordsDataState({ ...wordsDataState, words: updatedWords });
    setEditableWord(null);
    setNewWord({});
};

export default handleSave;