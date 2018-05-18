function capitalizeWords(text) {
    text = text.split(" ");
    let result = [];
    for (let word of text) {
        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                result.push(word[i].toUpperCase());
                continue;
            }
            result.push(word[i].toLowerCase());
        }
        result.push(" ");
    }
    console.log(result.join(""));
}

capitalizeWords("Was that Easy? tRY thIs onE for SiZe!");