function censor(text, arr) {

    for (let word of arr) {
        let indexOfWord = text.indexOf(word);
        while(indexOfWord > -1){
            text = text.replace(word, "-".repeat(word.length));
            indexOfWord = text.indexOf(word, indexOfWord + word.length);
        }
    }
    console.log(text);
}

censor('roses are red, violets are blue', [', violets are', 'red']);