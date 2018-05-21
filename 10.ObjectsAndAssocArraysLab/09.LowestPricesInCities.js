function lowestPrice(input) {
    let cheapestProducts = new Map();

    for (let line of input) {
        [town, product, price] = line.split(" | ").filter(e => e != "");

        if (!cheapestProducts.has(product)) {
            cheapestProducts.set(product, new Map())
        }
        cheapestProducts.get(product).set(town, Number(price));
    }

    for (let [product, inMap] of cheapestProducts) {
        let lowestPrice = Infinity;
        let townLowestPrice = "";
        for (let [town, price] of inMap) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townLowestPrice})`)
    }
}

lowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);