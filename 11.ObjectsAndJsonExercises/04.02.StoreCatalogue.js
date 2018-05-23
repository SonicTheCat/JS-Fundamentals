function storeCataloge(products) {
    let catalogue = new Map();

    for (let i = 0; i < products.length; i++) {
        let currentPro = products[i].split(" : ");

        let product = currentPro[0];
        let price = Number(currentPro[1]);
        let firstLetter = product[0];

        if (!catalogue.has(firstLetter)) {
            catalogue.set(firstLetter, new Map());
        }
        catalogue.get(firstLetter).set(product,price);
    }

    catalogue = new Map([...catalogue.entries()].sort());
    for (let [letter, insideMap]of catalogue) {
        console.log(letter);
        insideMap = new Map([...insideMap.entries()].sort());
        for (let [product, price] of insideMap) {
            console.log(`  ${product}: ${price}`);
        }
    }
}

storeCataloge([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);