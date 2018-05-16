function matchAllWords(text) {
let regex = /\W+/;

let splitText = text.split(regex).filter(e => e != "");

console.log(splitText.join("|"));
}

matchAllWords('_(Underscores) are also word characters');