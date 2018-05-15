function orbit([rows,cols,starRow,starCol]) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = Math.max(Math.abs(r - starRow), Math.abs(c - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

orbit([9, 9, 2, 3]);
