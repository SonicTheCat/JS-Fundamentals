function roundNumber(input) {
    let num = input[0];
    let precision = input[1] <= 15 ? input[1] : 15;

    let result = parseFloat(num.toFixed(precision));
    console.log(result);

}

roundNumber([10.54300001, 11]);