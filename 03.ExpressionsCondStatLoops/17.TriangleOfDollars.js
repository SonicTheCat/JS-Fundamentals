function numberOfRows(number) {
    let dollars = "";

    for (let row = 0; row < number; row++) {
        dollars = "$";
        for (let col = 0; col < row; col++) {
            dollars += "$";
        }
        console.log(dollars);
    }
}

numberOfRows("11");