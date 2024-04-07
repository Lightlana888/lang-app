const handleDelete = (wordId, wordsDataState, setWordsDataState) => {
    const updatedWords = wordsDataState.words.filter(word => word.id !== wordId);

    setWordsDataState({ ...wordsDataState, words: updatedWords });
    console.log('Удаление слова с ID:', wordId);
};

export default handleDelete;