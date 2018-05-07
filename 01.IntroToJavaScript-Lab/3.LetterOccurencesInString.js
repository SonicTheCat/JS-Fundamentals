function lettersOccur(word, element) {
    let count = 0;

    for (var i = 0; i < word.length; i++) {
       if (element == word[i]){
           count++;
       }
    }

    console.log(count)
}

lettersOccur('panther', 'n')