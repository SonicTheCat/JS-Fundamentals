function heroesRegister(input) {
    let heroes = [];

    for (let hero of input) {
        let [name, level, items] = hero.split(" / ");
        items = items === undefined ? [] : items.split(", ");

        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(currentHero)
    }
    console.log(JSON.stringify(heroes));
}

heroesRegister([
    'Isacc / 25 /',
    'Isacc / 50 / Apple, watch',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);