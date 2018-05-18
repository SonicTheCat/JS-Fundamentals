function startWithSubs(text, sub) {
    let index = text.indexOf(sub);
    console.log(index === 0 ? true : false);
}

findSubstring("How have you been?", "how");
findSubstring("The quick brown fox…", "The quick brown fox…");
findSubstring("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta");