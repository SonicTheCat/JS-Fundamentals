function sumDiagonals(input) {
    let matrix = input.map(row => row.split(" ").map(e => Number(e)));

    let sumOne = 0;
    let sumTwo = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumOne += matrix[row][row];
        sumTwo += matrix[row][matrix.length - 1 - row];
    }

    if (sumOne === sumTwo) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col != row && col != matrix.length - 1 - row) {
                    matrix[row][col] = sumOne;
                    continue;
                }
            }
        }
    }
    // console.log(matrix.map(row => row.join(" ")).join("\n"));
    matrix.forEach(row => console.log(row.join(" ")));
}

sumDiagonals(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);