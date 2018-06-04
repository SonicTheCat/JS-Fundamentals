function xRemoval(input) {
    let matrix = [];
    let toLowerCase = [];
    let shapes = [];

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split("");
        matrix.push(line);
        toLowerCase.push(line.map(e => e.toLowerCase()));
        shapes.push(line.map(e => e = false));
    }

    for (let row = 0; row < toLowerCase.length; row++) {
        let currentRow = [];
        for (let col = 0; col < toLowerCase[row].length; col++) {
            if (row + 2 < toLowerCase.length && col + 2 < toLowerCase[row].length) {

                let symbol = toLowerCase[row][col];
                if (toLowerCase[row][col + 2] === symbol &&
                    toLowerCase[row + 1][col + 1] === symbol &&
                    toLowerCase[row + 2][col] === symbol &&
                    toLowerCase[row + 2][col + 2] === symbol) {

                    changeShapeCoordinateStatus(row, col, shapes);
                } else {
                    currentRow.push(alreadyMatchedIndex(shapes, row, col, matrix));
                }
            } else {
                currentRow.push(alreadyMatchedIndex(shapes, row, col, matrix));
            }
        }
        console.log(currentRow.join(""))
    }

    function alreadyMatchedIndex(shapes, row, col, matrix) {
        if (shapes[row][col] === false) {
            return matrix[row][col];
        }
    }

    function changeShapeCoordinateStatus(row, col, shapes) {
        shapes[row][col + 2] = true;
        shapes[row + 1][col + 1] = true;
        shapes[row + 2][col] = true;
        shapes[row + 2][col + 2] = true;
    }
}

xRemoval([
    'ABNAbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
]);