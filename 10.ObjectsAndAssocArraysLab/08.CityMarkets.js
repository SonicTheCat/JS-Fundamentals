function cityMarket(input) {
    let townsMap = new Map();

    for (let i = 0; i < input.length; i++) {
        let [city, product, amountAndPrice] = input[i].split(" -> ").map(w => w.trim());
        let sales = amountAndPrice.split(" : ").reduce((a, b) => a * b);

        if (!townsMap.has(city)) {
            townsMap.set(city, new Map());
        }
        if (!townsMap.get(city).has(product)) {
            townsMap.get(city).set(product, 0);
        }
        let oldIncome = townsMap.get(city).get(product);
        townsMap.get(city).set(product,oldIncome + sales)
    }
    for (let [town,products] of townsMap) {
        console.log(`Town - ${town}`);
        for (let [product, sale] of products) {
            console.log(`$$$${product} : ${sale}`);
        }
    }
}

cityMarket([`    Sofia -> Laptops HP -> 200 : 2000`,
    `Sofia -> Raspberry -> 200000 : 1500`,
    `Sofia -> Audi Q7 -> 200 : 100000`,
    `Montana -> Portokals -> 200000 : 1`,
    `Montana -> Qgodas -> 20000 : 0.2`,
    `Montana -> Chereshas -> 1000 : 0.3`]);