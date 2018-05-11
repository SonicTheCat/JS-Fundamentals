function equalNeighbors(matrix) {
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let arr = 0; arr < matrix[row].length; arr++) {
            if (matrix[row][arr] === matrix[row][arr + 1]) {
                counter++;
            }
            if (row != matrix.length - 1 && matrix[row][arr] === matrix[row + 1][arr]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);