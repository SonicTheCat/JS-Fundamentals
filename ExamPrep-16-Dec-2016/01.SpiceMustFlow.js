function spiceMustFlow(input) {
    let startNum = Number(input.pop());
    let spice = 0;
    let days = 0;

    while (startNum >= 100) {
        days++;
        spice += startNum;

        spice -= 26;
        startNum -= 10;
    }
    if (spice >= 26) {
        spice -= 26;
    }

    console.log(days);
    console.log(spice);

}

spiceMustFlow([99]);