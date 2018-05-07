function roundNumber(input) {
    let num = input[0];
    let precision = input[1] <= 15 ? input[1] : 15;

    let multiplier = Math.pow(10,precision);
    return Math.round(num * multiplier) / multiplier;
}

console.log(roundNumber([10.53546461, 6]));