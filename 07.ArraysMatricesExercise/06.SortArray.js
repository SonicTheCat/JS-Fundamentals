sortArray =
        arr => arr.sort().sort((a,b) => a.length - b.length).join("\n");

console.log(sortArray(["test", "Deny", "omen", "Default"]));









