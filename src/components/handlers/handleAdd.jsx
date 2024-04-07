

const handleAdd = (setShowNewWordRow, setNewWord) => {
    setShowNewWordRow(true);
    const newWordObject = {
        english: '',
        transcription: '',
        russian: '',
        tags: ''
    };
    setNewWord(newWordObject);
};

export default handleAdd;
