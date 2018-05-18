function hideWords(text) {
    let namesPattern = /(\*[A-Z][A-Za-z]*)(?=\s|$|\.)/g;
    let phonePattern = /(\+[0-9-]{10})(?=\s|$|\.)/g;
    let idPattern = /(\![A-Za-z0-9]+)(?=\s|$|\.)/g;
    let basePattern = /(\_[A-Za-z0-9]+)(?=\s|$|\.)/g;

    for (let sentence of text) {
        sentence = sentence.replace(namesPattern, m => "|".repeat(m.length));
        sentence = sentence.replace(phonePattern, m => "|".repeat(m.length));
        sentence = sentence.replace(idPattern, m => "|".repeat(m.length));
        sentence = sentence.replace(basePattern, m => "|".repeat(m.length));

        console.log(sentence);
    }
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
