function biggestNum(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentNum = matrix[row][col];

            if (currentNum > biggestElement) {
                biggestElement = currentNum;
            }
        }
    }
    console.log(biggestElement);
}

biggestNum(
    [[20111, 50, 10],
        [8, 33, 145]]
);