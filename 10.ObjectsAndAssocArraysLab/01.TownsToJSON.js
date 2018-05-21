function townsToJson(arr) {
    arr.shift();
    let towns = [];

    for (let line of arr) {
        line = line.split("|").filter(e => e !== "").map(e => e.trim());

        let currentTown = {
            Town: line[0],
            Latitude: Number(line[1]),
            Longitude: Number(line[2])
        };

        towns.push(currentTown);
    }
    console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);