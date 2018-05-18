function findSubstring(text, sub) {
    let subLength = sub.length;
    let textSub = text.substr(0, subLength);
    if (textSub === sub) {
        console.log(true);
    } else {
        console.log(false);
    }
}

findSubstring("How have you been?", "how");
findSubstring("The quick brown fox…", "The quick brown fox…");
findSubstring("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta");