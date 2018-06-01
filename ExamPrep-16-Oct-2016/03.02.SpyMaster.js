function spyMaster(input) {
    let key = input.shift();
    let pattern = new RegExp(`(^|\\s)(${key})(\\s+[A-Z!%$#]{8,})(\\.|\\,|\\s|$)`, `gmi`);

    for (let i = 0; i < input.length; i++) {

        let match = input[i].replace(pattern, function (match ,gr1, gr2,gr3,gr4) {
            let message = gr3;
            if (message.match(/\s+[A-Z!%$#]{8,}/)) {
                message = message.replace(/!/g, '1')
                    .replace(/%/g, '2')
                    .replace(/#/g, '3')
                    .replace(/\$/g, '4')
                    .toLowerCase();
            }
            return gr1 + gr2 + message + gr4;
        });

        if (match) {
            console.log(match);
        } else {
            console.log(input[i]);
        }
    }
}

spyMaster([
    'enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);