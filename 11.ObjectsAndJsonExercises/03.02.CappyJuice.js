function cappyJuice(input) {
    let fruitsQuan = {};
    let bottles = {};

    for (let line of input) {
        let [fruit, quantity] = line.split(" => ");

        if (!fruitsQuan.hasOwnProperty(fruit)) {
            fruitsQuan[fruit] = 0;
        }
        fruitsQuan[fruit] += Number(quantity);
        if (fruitsQuan[fruit] >= 1000) {
            bottles[fruit] = parseInt(fruitsQuan[fruit] / 1000);
        }
    }
    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);