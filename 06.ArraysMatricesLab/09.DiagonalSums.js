function sumOfDiagonals(matrix) {
    let sum = [0, 0];
    for (let row = 0; row < matrix.length; row++) {
            sum[0] += matrix[row][row];
            sum[1] += matrix[row][matrix.length - row - 1];
    }
    console.log(sum.join(" "));
}

sumOfDiagonals([[20, 40, 30], [10, 60, 40], [15, 50, 10]]);