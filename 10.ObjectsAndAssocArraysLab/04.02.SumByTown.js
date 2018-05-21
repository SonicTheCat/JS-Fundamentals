function sumTowns(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        [town, value] = [input[i], Number(input[i + 1])];

        if (towns[town] === undefined) {
            towns[town] = value;
        } else {
            towns[town] += value
        }
    }
    return JSON.stringify(towns);
}

console.log(sumTowns([`Sofia`,
    `20`,
    `Varna`,
    `3`,
    `Sofia`,
    `5`,
    `Varna`,
    `4`]
));