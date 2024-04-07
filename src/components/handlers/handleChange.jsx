const handleChange = (e, field, setNewWord, newWord) => {
    const updatedWord = { ...newWord, [field]: e.target.value };
    setNewWord(updatedWord);
};

export default handleChange;