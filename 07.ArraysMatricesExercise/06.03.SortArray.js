function sortArray(arr) {
    arr.sort(function (a, b) {
        if (a.length != b.length)   return a.length - b.length;
        if (a.length == b.length)   return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log(arr.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc','Theodor','Jack','Harrison','George']);
sortArray(['test','Deny','omen','Default']);