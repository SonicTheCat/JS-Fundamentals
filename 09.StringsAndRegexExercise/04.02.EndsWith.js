function star(text, sub) {
    text = text.split("").reverse().join("");
    sub = sub.split("").reverse().join("");

    let index = text.indexOf(sub);
    console.log(index === 0 ? true : false);
}

star('How have you been?', 'how');