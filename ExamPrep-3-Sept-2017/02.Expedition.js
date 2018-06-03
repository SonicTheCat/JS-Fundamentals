function findWayOut(primary, secondary, overlayCoordinates, start) {
    for (let i = 0; i < overlayCoordinates.length; i++) {
        let overlay = overlayCoordinates[i];

        let secRow = -1;
        for (let row = overlay[0]; row < Math.min(overlay[0] + secondary.length, primary.length); row++) {
            ++secRow;
            let secCol = -1;
            for (let col = overlay[1]; col < Math.min(overlay[1] + secondary[secRow].length, primary[row].length); col++) {
                ++secCol;
                if (secondary[secRow][secCol] === 1) {
                    if (primary[row][col] === 1) {
                        primary[row][col] = 0;
                    } else {
                        primary[row][col] = 1;
                    }
                }
            }
        }
    }
    let [row, col] = start;
    let previousMove = "";
    let moves = 1;
    while (true) {
        if (row + 1 < primary.length && primary[row + 1][col] === 0 && previousMove !== "up") {
            row = row + 1;
            previousMove = "down";
        } else if (col + 1 < primary[row].length && primary[row][col + 1] === 0 && previousMove !== "left") {
            col = col + 1;
            previousMove = "right";
        } else if (row - 1 >= 0 && primary[row - 1][col] === 0 && previousMove !== "down") {
            row = row - 1;
            previousMove = "up";
        } else if (col - 1 >= 0 && primary[row][col - 1] === 0 && previousMove !== "right") {
            col = col - 1;
            previousMove = "left";
        } else {
            break;
        }
        moves++;
    }

    console.log(moves);

    if (row === primary.length - 1) {
        console.log("Bottom")
    } else if (row === 0) {
        console.log("Top")
    } else if (col === 0) {
        console.log("Left")
    } else if (col === primary[row].length - 1) {
        console.log("Right")
    } else if (row < primary.length / 2 && col >= primary[row].length / 2) {
        console.log("Dead end 1");
    } else if (row < primary.length / 2 && col < primary[row].length / 2) {
        console.log("Dead end 2");
    } else if (row >= primary.length / 2 && col < primary[row].length / 2) {
        console.log("Dead end 3");
    } else if (row >= primary.length / 2 && col >= primary[row].length / 2) {
        console.log("Dead end 4");
    }
}

findWayOut(
    [[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]

);