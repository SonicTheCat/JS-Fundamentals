function surveyParser(text) {
    let pattern = /<svg>(.+?)<\/svg>/gs;
    let matches = pattern.exec(text);
    if (matches === null) return "No survey found";

    pattern = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
    matches = pattern.exec(text);
    if (matches) {
        let label = matches[3];
        let ratings = matches[7];

        pattern = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/g;
        matches = pattern.exec(ratings);

        if (matches) {
            let result = 0;
            let count = 0;
            while (matches) {
                let value = Number(matches[1]);
                let vote = Number(matches[2]);

                count += vote;
                result += value * vote;
                matches = pattern.exec(ratings);
            }
            result = result / count;
            return `${label}: ${parseFloat(result.toFixed(2))}`
        }
    }
    return "Invalid format";
}

console.log(surveyParser(`<p>Our guests may enjoy a special menu of freshly caught seafood.</p>
<br>
<svg>
<cat><text>How do you rate the special menu? [Food - Specia]</text></cat> 
<cat>
<g><val>1</val>5</g>
<g><val>5</val>13</g>
<g><val>10</val>22</g>
</cat>
</svg>`));
