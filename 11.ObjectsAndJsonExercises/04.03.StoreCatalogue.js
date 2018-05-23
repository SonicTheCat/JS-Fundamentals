function storeCatalogue(input) {
    let catalogue = new Map();

    for(let line of input){
        let tokens = line.split(" : ");
        let product = tokens[0];
        let price = tokens[1];
        catalogue.set(product, price);
    }
    let initials = new Set();
    Array.from(catalogue.keys()).forEach(k => initials.add(k[0]));

    for(let char of Array.from(initials.keys()).sort()) {
        console.log(char);
        for(let product of Array.from(catalogue.keys()).sort()){
            if(product.startsWith(char)) {
                console.log(`  ${product}: ${catalogue.get(product)}`);
            }
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);