function stringToUpperCase(text) {
    text = text.toUpperCase();
    let words = splitWords();

    function splitWords() {
        return text.split(/\W+/);
    }

    words = words.filter(w => w != "");
    return words.join(", ");
}

console.log(stringToUpperCase('Hi, how are you?'));