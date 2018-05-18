function hideWords(text) {
    //Това решение го добутах до 87/100 точки! Другите две дават 100/100
    text = text.join("\n");

    let namesPattern = /(\*[A-Z][A-Za-z]*)(?=\s|$|\.)/g;
    let phonePattern = /(\+[0-9-]{10})(?=\s|$|\.)/g;
    let idPattern = /(\![A-Za-z0-9]+)(?=\s|$|\.)/g;
    let basePattern = /(\_[A-Za-z0-9]+)(?=\s|$|\.)/g;

    let match = null;
    while (match = namesPattern.exec(text) || phonePattern.exec(text) ||
        idPattern.exec(text) || basePattern.exec(text)) {

        text = text.replace(match[1], "|".repeat(match[1].length));
    }
    console.log(text);
}

hideWords([`Agent *Ivankov was in the room when it all happened.`,
    `The person in the room was heavily armed.`,
    `Agent *Ivankov had to act quick in order.`,
    `He picked up his phone and called some unknown number. `,
    `I think it was +555-49-796`,
    `I can't really remember...`,
    `He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21`,
    `Then after that he disappeared from my sight.`,
    `As if he vanished in the shadows.`,
    `A moment, shorter than a second, later, I saw the person flying off the top floor.`,
    `I really don't know what happened there.`,
    `This is all I saw, that night.`,
    `I cannot explain it myself...`]);