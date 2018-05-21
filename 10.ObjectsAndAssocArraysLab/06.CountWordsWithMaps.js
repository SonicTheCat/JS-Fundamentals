function countWords(text) {
    text = text.join("\n").toLowerCase();
    let splitText = text.split(/\W+/).filter(w => w != "");
    let wordCounter = new Map();

    for (let word of splitText) {
        word = word;
        wordCounter.has(word) ? wordCounter.set(word, wordCounter.get(word) + 1) : wordCounter.set(word, 1)
    }

    let sortWords = Array.from(wordCounter.keys()).sort();
    sortWords.forEach(w => console.log(`'${w}' -> ${wordCounter.get(w)} times`));
}

countWords(["Far too slow, you're far too slow."]);

