function orbit([rows, cols, planetRow, planetCol]) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let arr = [];
        for (let i = 0; i < cols; i++) {
            arr.push(0);
        }
        matrix.push(arr);
    }
    let number = 1;
    matrix[planetRow][planetCol] = number;

    let startRow = planetRow - 1;
    let startCol = planetCol - 1;
    let endRow = planetRow + 1;
    let endCol = planetCol + 1;

    while (startRow >= 0 || startCol >= 0 || endRow <= matrix.length - 1 || endCol <= matrix[0].length) {
        number++;

        if (startRow >= 0) {
            matrix[startRow].fill(number);
        }

        if (endRow<=matrix.length-1) {
            matrix[endRow].fill(number);
        }

        if (startCol>=0) {
            let beginOnRow = Math.max(0,startRow);
            let finishOnRow = Math.min(endRow,matrix.length-1);

            for (let r = beginOnRow; r <=finishOnRow; r++){
                 matrix[r][startCol] = number;
            }
        }

        if (endCol<=matrix[0].length-1) {
            let beginOnRow = Math.max(0,startRow);
            let finishOnRow = Math.min(endRow,matrix.length-1);

            for (let r = beginOnRow; r <=finishOnRow; r++){
                matrix[r][endCol] = number;
            }
        }

        startRow--;
        startCol--;
        endRow++;
        endCol++
    }

    matrix.forEach(row => console.log(row.join(" ")));
}
orbit([9,9,2,3]);

