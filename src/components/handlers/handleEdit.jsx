
const handleEdit = (setEditableWord, setNewWord, wordsDataState, index) => {
    setEditableWord(index);
    setNewWord(wordsDataState.words[index]);
};

export default handleEdit;
