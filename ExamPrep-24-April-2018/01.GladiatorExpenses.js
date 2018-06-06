function gladiatorExpenses(lostGames, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalCost = 0;
    let shieldBrakeCount = 0;
    for (let i = 1; i <= lostGames; i++) {

        if (i % 2 === 0 && i % 3 === 0) {
            totalCost += shieldPrice;
            shieldBrakeCount++;
        }
        if (i % 2 === 0) {
            totalCost += helmetPrice;
        }
        if (i % 3 === 0) {
            totalCost += swordPrice;
        }
        if (shieldBrakeCount === 2) {
            totalCost += armorPrice;
            shieldBrakeCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

gladiatorExpenses(23,12.50,21.50,40,200);