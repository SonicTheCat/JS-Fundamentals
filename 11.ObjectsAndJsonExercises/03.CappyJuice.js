function capyJuice(input) {
    let fruitsAndQuantity = new Map();
    let bottlesOfJuice = new Map();

    for (let line of input) {
        let [fruit, quantity] = line.split(" => ");
        quantity = Number(quantity);

        if (!fruitsAndQuantity.has(fruit)) {
            fruitsAndQuantity.set(fruit, 0);
        }
        fruitsAndQuantity.set(fruit, fruitsAndQuantity.get(fruit) + quantity);
        let sumQuantity = fruitsAndQuantity.get(fruit);

        if (sumQuantity >= 1000) {
           let bottle = ~~(sumQuantity / 1000); // Операторът ~~ закръгля на цяло чидло!

            if (!bottlesOfJuice.has(fruit)) {
                bottlesOfJuice.set(fruit, 0);
            }
            bottlesOfJuice.set(fruit, bottlesOfJuice.get(fruit) + bottle);
            let juiceLeft = sumQuantity % 1000;
            fruitsAndQuantity.set(fruit, juiceLeft);
        }
    }

    for (let [fruit, bottle] of bottlesOfJuice) {
        console.log(`${fruit} => ${bottle}`);
    }
}

capyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);