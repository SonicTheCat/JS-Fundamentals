function airportTraffic(data) {
    let towns = {};
    let airplanes = {};
    //85/100
    //Кодът си работи вярно, но в джъдж има сгрешение тестове! Провбвал съм и с други решения, също дават 85/100

    for (let i = 0; i < data.length; i++) {
        let [plane, city, pass, action] = data[i].split(" ");

        if (!airplanes.hasOwnProperty(plane)) {
            if (action === "depart") {
                continue;
            }
            airplanes[plane] = {action: action};
        } else if (airplanes.hasOwnProperty(plane)) {
            let status = airplanes[plane].action;
            if (status === action) {
                continue;
            }
            airplanes[plane] = {action: action};
        }
        if (!towns.hasOwnProperty(city)) {
            towns[city] = {
                Arrivals: 0,
                Departures: 0,
                Planes: []
            };
        }
        if (![...towns[city].Planes].find(p => p === plane)) {
            towns[city].Planes.push(plane);
        }
        if (action === "depart") {
            towns[city].Departures = towns[city].Departures + Number(pass);
        }
        if (action === "land") {
            towns[city].Arrivals = towns[city].Arrivals + Number(pass);
        }
    }

    console.log("Planes left:");
    [...Object.keys(airplanes)]
        .filter(p => airplanes[p].action === "land")
        .sort((p1, p2) => p1.localeCompare(p2))
        .forEach(p => console.log("- " + p));

    let sortTowns = [...Object.keys(towns)].sort((a, b) => sortByArrivals(a, b, towns));

    let result = {};
    for (let town of sortTowns) {
        result[town] = {Arrivals: 0, Departures: 0, Planes: []};
        result[town].Arrivals = towns[town].Arrivals;
        result[town].Departures = towns[town].Departures;
        result[town].Planes = [...towns[town].Planes].sort((a, b) => a.localeCompare(b));
    }
    for (let town in result) {
        console.log(town);
        console.log(`Arrivals: ` + result[town].Arrivals);
        console.log(`Departures: ` + result[town].Departures);
        console.log(`Planes:`);
        [...result[town].Planes].forEach(p => console.log("-- " + p));
    }

    function sortByArrivals(townOne, townTwo, towns) {
        let firstTownArrivals = towns[townOne].Arrivals;
        let secondTownArrivals = towns[townTwo].Arrivals;
        if (firstTownArrivals === secondTownArrivals) {
            return townOne.localeCompare(townTwo);
        }
        return secondTownArrivals - firstTownArrivals;
    }
}
airportTraffic([
    "AirForceOne Madrid 300 land",
    "AirForceOne WashingtonDC 178 depart",
    "AirForceOne Madrid 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);
