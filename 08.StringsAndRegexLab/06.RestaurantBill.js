function restaurantBill(purchases) {
    let food = [];
    let price = 0;

    for (let i = 0; i < purchases.length; i++) {
        if (i%2==0) {
            let currFood = purchases[i].trim();
            food.push(currFood);

        } else{
            let currPrice = (Number)(purchases[i].trim());
            price += currPrice;
        }
    }

    console.log(`You purchased ${food.join(", ")} for a total sum of ${price}`);

}
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);