function spyMaster(input) {
    let key = input.shift();
    let keyPattern = new RegExp(`${key}`, "ig");

    for (let i = 0; i < input.length; i++) {
        let keyMatch = keyPattern.exec(input[i]);
        while (keyMatch) {
            let pattern = new RegExp(`(^|\\s)(` + keyMatch[0] + `\\s+)([A-Z!%$#]{8,})([. ,]|$)`, `gm`);

            input[i] = input[i].replace(pattern, function (match,gr1,gr2,gr3,gr4) {
                let newString = "";
                for (let element of gr3) {
                    switch (element){
                        case "!":newString+= 1;break;
                        case "%":newString+= 2;break;
                        case "#":newString+= 3;break;
                        case "$":newString+= 4;break;
                        default: newString+= element.toLowerCase();
                    }
                }
                return gr1 + gr2 + newString + gr4;
            });
            keyMatch = keyPattern.exec(input[i]);
        }
    }
    input.forEach(line => console.log(line));
}

spyMaster([
    'enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);