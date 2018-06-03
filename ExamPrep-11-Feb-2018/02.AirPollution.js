function airPolution(firstArr, secondArr) {
    let matrix = [];
    firstArr.forEach(line => matrix.push(line.split(" ").map(Number)));

    for (let i = 0; i < secondArr.length; i++) {
        let line = secondArr[i].split(" ").filter(e => e != "").filter(e => e.trim());
        let [force, indexValue] = line;
        indexValue = Number(indexValue);

        if (force === "breeze") {
            for (let col = 0; col < matrix[indexValue].length; col++) {
                greaterThanZero(indexValue, col, 15);
            }
        }
        if (force === "gale") {
            for (let row = 0; row < matrix.length; row++) {
                greaterThanZero(row, indexValue, 20);
            }
        }
        if (force === "smog") {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += indexValue;
                }
            }
        }
    }

    let pollution = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50) {
                pollution.push(`[${row}-${col}]`);
            }
        }
    }
    if (pollution.length > 0) {
       console.log(`Polluted areas: ` + pollution.join(", "));
    }else{
        console.log(`No polluted areas`);
    }

    function greaterThanZero(row, col, value) {
        if (matrix[row][col] - value >= 0) {
            return matrix[row][col] -= value;
        } else {
            return matrix[row][col] = 0;
        }
    }
}

airPolution(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]

);