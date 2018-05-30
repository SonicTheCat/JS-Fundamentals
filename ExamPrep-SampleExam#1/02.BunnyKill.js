function bombBunnies(input) {
    let bombs = input.pop().split(/[\s,]+/g).map(Number);
    let matrix = input.map(line => line.split(/\s+/g).map(Number));

    let snowballDmg = 0;
    let count = 0;

    for (let i = 0; i < bombs.length; i += 2) {
        let row = bombs[i];
        let col = bombs[i + 1];

        if (matrix[row][col] > 0) {
            snowballDmg += matrix[row][col];
            count++;
            damagedIndexes(row, col, matrix[row][col]);
            matrix[row][col] = 0;
        }
    }
    matrix.map(line => snowballDmg += line.reduce((a, b) => a + b));
    matrix.map(line => count += line.filter(e => e > 0).length);

    console.log(snowballDmg);
    console.log(count);

    function damagedIndexes(bombRow, bombCol, damage) {
        for (let row = Math.max(0, bombRow - 1); row <= Math.min(bombRow + 1, matrix.length - 1); row++) {
            for (let col = Math.max(0, bombCol - 1); col <= Math.min(bombCol + 1, matrix[row].length - 1); col++) {
                if (row !== bombRow || col !== bombCol) {
                    matrix[row][col] -= damage;
                    if (matrix[row][col] < 0) {
                        matrix[row][col] = 0;
                    }
                }
            }
        }
    }
}

bombBunnies([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0',
]);