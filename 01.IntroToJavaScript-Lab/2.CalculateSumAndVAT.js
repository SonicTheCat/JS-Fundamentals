function calculateVAT(input) {
      let sum = 0;

    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.20}`);
    console.log(`total = ${sum * 1.2}`);
}

calculateVAT([1.20, 2.60, 3.50]);