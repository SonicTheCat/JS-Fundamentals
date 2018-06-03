function miningBitcoins(arr) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let sum = 0;
    let coins = 0;
    let firstBitcoin = null;

    for (let i = 1; i <= arr.length; i++) {
        let grams = Number(arr[i - 1]);
        if (i % 3 === 0) {
            grams = grams * 0.70;
        }

        sum += grams * goldPrice;
        while (sum >= bitcoinPrice) {
            if (coins === 0) {
                firstBitcoin = i;
            }
            coins++;
            sum -= bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${coins}`);
    if (firstBitcoin != null) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

miningBitcoins(["100", "200", "300"]);