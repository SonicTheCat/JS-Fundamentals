function spiralMatrix(rows, cols) {      // решение 08.02 е по- разбираемо!!!

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let minRow = 0;
    let maxRow = rows - 1;
    let minCol = 0;
    let maxCol = cols - 1;

    let counter = 1;
    let direction = 0;
    while (minRow <= maxRow && minCol <= maxCol) {
        switch (direction % 4) {
            case 0:
                for (let c = minCol; c <= maxCol; c++) {
                    matrix[minRow][c] = counter++;
                }
                minRow++;
                direction++;
                break;
            case 1:
                for (let r = minRow; r <= maxRow; r++) {
                    matrix[r][maxCol] = counter++;
                }
                maxCol--;
                direction++;
                break;
            case 2:
                for (let c = maxCol; c >= minCol; c--) {
                    matrix[maxRow][c] = counter++;
                }
                maxRow--;
                direction++;
                break;
            default:
                for (let r = maxRow; r >= minRow; r--) {
                    matrix[r][minCol] = counter++;
                }
                minCol++;
                direction++;
                break;
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

spiralMatrix(5, 5);