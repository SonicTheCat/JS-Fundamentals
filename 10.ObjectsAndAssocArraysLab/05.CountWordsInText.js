function countWords(arr) {
    let splitArr = arr[0].split(/\W+/).filter(w => w != "");
    let wordCounter = {};
    for (let word of splitArr) {
        if (!wordCounter.hasOwnProperty(word)) {
            wordCounter[word] = 1;
        } else {
            wordCounter[word]++;
        }
    }
    console.log(JSON.stringify(wordCounter));
}

countWords(["Far too slow, you're far too slow."]);