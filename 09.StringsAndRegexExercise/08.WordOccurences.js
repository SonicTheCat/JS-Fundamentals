function countOccurences(text, word) {
    let pattern = new RegExp(`\\b${word}\\b`, "gi");

    let match = pattern.exec(text);
    let count = 0;
    while (match !== null) {
        count++;
        match = pattern.exec(text);
    }
    console.log(count);
}

countOccurences("The waterfall was so high, that the child couldn’t see its peak.", "the");