function bombBunnies(input) {
    let bombs = input.pop().split(/[\s,]+/g).map(Number);
    let matrix = input.map(line => line.split(/\s+/g).map(Number));

    let snowballDmg = 0;
    let count = 0;

    for (let i = 0; i < bombs.length; i += 2) {
        let row = bombs[i];
        let col = bombs[i + 1];
        let dmg = matrix[row][col];
        if (matrix[row][col] > 0) {
            snowballDmg += dmg;
            count++;
            for (let i = row - 1; i <=row + 1; i++) {
                for (let j = col - 1; j <=col + 1; j++) {
                    if (isInside(i,j,matrix)) {
                        matrix[i][j] -= dmg;
                    }
                }
            }
        }

    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                snowballDmg += matrix[i][j];
                count++;
            }
        }
    }

    console.log(snowballDmg);
    console.log(count);

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }

}

bombBunnies([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0',
]);