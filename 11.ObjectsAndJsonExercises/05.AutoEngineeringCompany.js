function autoCompany(input) {
    let producedCars = new Map();

    for (let line of input) {
        let [brand, model, countOfCars] = line.split(" | ");
        countOfCars = Number(countOfCars);
        if (!producedCars.has(brand)) {
            producedCars.set(brand, new Map());
        }
        if (!producedCars.get(brand).has(model)) {
            producedCars.get(brand).set(model, 0)
        }
        producedCars.get(brand).set(model, producedCars.get(brand).get(model) + countOfCars);
    }
    for (let [brand, modelsAndNumbers]of producedCars) {
        console.log(brand);

        for (let [model, number] of modelsAndNumbers) {
            console.log(`###${model} -> ${number}`);
        }
    }
}

autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q7 | 1',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'BMW | X6 | 11',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);