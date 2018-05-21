function townsPopulation(inputArr) {
    let townsMap = new Map();
    for (let i = 0; i < inputArr.length; i++) {
        let [town, population] = inputArr[i].split("<->");
         population = Number(population);
        if (townsMap.has(town)) {
            townsMap.set(town, townsMap.get(town) + population)
        } else {
            townsMap.set(town, population);
        }
    }
    for (let [town, population] of townsMap) {
        console.log(`${town}: ${population}`);
    }
}

townsPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
    "Sofia <-> 10"]);