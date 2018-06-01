function rosettaStone(input) {
    let n = Number(input.shift());
    let template = [];

    for (let i = 0; i < n; i++) {
        let takeLine = input.shift().split(/\s+/).map(Number);
        template.push(takeLine);
    }
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let takeElement = input[i].split(/\s+/).map(Number);
        matrix.push(takeElement);
    }

    let templateRows = template.length;
    let templateCols = template[0].length;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = matrix[row][col] + template[row % templateRows][col % templateCols];
        }
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    alphabet.unshift(" ");
    let message = "";

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let number = matrix[row][col];

            message += alphabet[number % 27];
        }
    }
    console.log(message);
}

rosettaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
]);