function restaurantBill(purchases) {
    let food = purchases.filter((f,i) => i%2==0);
    let price = purchases
        .filter((p,i) => i%2!=0)
        .map(Number)
        .reduce((a,b) => a + b);
    
    console.log(`You purchased ${food.join(", ")} for a total sum of ${price}`);
}

restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);