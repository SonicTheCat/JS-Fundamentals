function sortArray(arr) {
  arr.sort((a, b) => {
        if (a.toUpperCase() < b.toUpperCase()) {
            return -1;
        } else {
            return 1
        }
    }).sort((a, b) => a.length - b.length);

    for (let str of arr) {
        console.log(str);
    }
}

sortArray(["test", "Deny", "omen", "Default"]);