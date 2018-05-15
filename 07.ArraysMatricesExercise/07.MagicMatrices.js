function isMagic(matrix) {
    let sum = matrix[0].reduce((a,b) => a+b);


    for (let i = 1; i < matrix.length; i++) {
        if (sum != matrix[i].reduce((a,b) => a+b)) return false;
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (sum != colSum) return false;
    }
    return true;
}

console.log(isMagic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));