function travelInvestigation(input) {
    let lineCompanies = input.shift();
    let delimiter = input.shift();
    let companies = lineCompanies.split(delimiter);
    let validSentences = [];
    let invalidSentences = [];

    for (let i = 0; i < input.length; i++) {
        let sentence = input[i].toLowerCase();
        let flag = true;
        for (let company of companies) {
            if (sentence.indexOf(company) === -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            validSentences.push(input[i].toLowerCase());
        } else {
            invalidSentences.push(input[i].toLowerCase());
        }
    }
    let counter = 1;
    if (validSentences.length > 0) {
        console.log(`ValidSentences`);
        for (let sentence of validSentences) {
            console.log(`${counter}. ${sentence}`);
            counter++;
        }
    }
    if (validSentences.length > 0 && invalidSentences.length > 0) {
        console.log("=".repeat(30));
    }
    if (invalidSentences.length > 0) {
        console.log("InvalidSentences");
        counter = 1;
        for (let sentence of invalidSentences) {
            console.log(`${counter}. ${sentence}`);
            counter++;
        }
    }
}

travelInvestigation(
    ['bulgariatour@, minkatrans@, koftipochivkaltd',
        '@, ',
        'Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour',
        'dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans',
        'someone continues as no']
);