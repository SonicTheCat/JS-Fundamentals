function spiralMatrix(rows, cols) {    // решение 08.02 е по- разбираемо!!!
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(0);
        }
    }

    let counter = 0;
    let row = 1;
    let col = -1;
    while (counter < rows * cols) {
        row--;
        col++;
        while(col < cols && matrix[row][col] == 0) {
            counter++;
            matrix[row][col] = counter;
            col++;
        }
        row--;
        col--;
        while (row >= 0 && matrix[row][col] == 0) {
            counter++;
            matrix[row][col] = counter;
            row--;
        }
        row++;
        col--;
        while (col >= 0 && matrix[row][col] == 0) {
            counter++;
            matrix[row][col] = counter;
            col--;
        }
        row++;
        col++;
        while (row < rows && matrix[row][col] == 0) {
            counter++;
            matrix[row][col] = counter;
            row++;
        }

    }
    console.log(matrix.map(a => a.join(" ")).join("\n"));
}

spiralMatrix(5, 5);