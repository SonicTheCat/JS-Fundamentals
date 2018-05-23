function uniqueArray(arrays) {
    let uniques = new Map();

    for (let arr of arrays) {
        arr = JSON.parse(arr).sort((a, b) => b - a);
        let asOutput = `[${arr.join(", ")}]`;
        if (!uniques.has(arr)) {
            uniques.set(asOutput, arr.length)
        }
    }
    console.log([...uniques.keys()].sort((arr1, arr2) => uniques.get(arr1) - uniques.get(arr2)).join("\n"))
}

uniqueArray([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);