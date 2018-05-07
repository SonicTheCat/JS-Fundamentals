function composeTag(input) {
    let location = input[0];
    let alt = input[1];

    console.log(`<img src="${location}" alt="${alt}">`)
}

composeTag(['smiley.gif', 'Smiley Face']);