function storeCataloge(products) {
    let catalogue = new Map();

    for (let line of products) {
        let [product, price] = line.split(" : ");
        let startChar = product.substring(0, 1).toUpperCase();
        if (!product.startsWith(startChar)) {
            continue;
        }
        catalogue.set(product, Number(price));
    }
    catalogue = new Map([...catalogue.entries()].sort());

    let letter = "";
    for (let [product, price] of catalogue) {
        if (product[0] != letter) {
            console.log(`${product[0]}`);
        }
        console.log(`  ${product}: ${price}`);

        letter = product[0];
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