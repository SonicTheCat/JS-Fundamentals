function endsWithSubs(text, sub) {
    let subLength = sub.length;
    console.log(text.substr(-subLength) === sub ? true : false);
}

endsWithSubs("This sentence ends with fun?", "fun?");