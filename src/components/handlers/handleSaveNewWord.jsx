const handleSaveNewWord = (wordsDataState, newWord, setWordsDataState, setShowNewWordRow, setNewWord) => {
    const updatedWords = [...wordsDataState.words, newWord];
    setWordsDataState({ ...wordsDataState, words: updatedWords });
    setShowNewWordRow(false);
    setNewWord({});
};

export default handleSaveNewWord;