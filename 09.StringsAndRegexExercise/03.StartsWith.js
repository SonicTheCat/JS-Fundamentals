function findSubstring(text, sub) {
    console.log(text.substr(0, sub.length) === sub ? true : false);
}

findSubstring("How have you been?", "how");
findSubstring("The quick brown fox…", "The quick brown fox…");
findSubstring("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta");