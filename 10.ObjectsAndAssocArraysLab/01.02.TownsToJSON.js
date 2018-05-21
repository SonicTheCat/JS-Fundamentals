function townsToJson(arr) {
    let towns = [];

    for (let line of arr.slice(1)) {
        let [empty, townName, lat, lng] = line.split(/\s*\|\s*/);

        let currentTown = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        towns.push(currentTown);
    }
    console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);