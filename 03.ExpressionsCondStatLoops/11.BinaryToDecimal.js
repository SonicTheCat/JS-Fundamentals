function binaryToDecimal(binary) {
    let result = 0;
    let pow = 0;

    for (let i = binary.length - 1; i >= 0; i--) {

        let num = Number(binary[i]);
        result += num * Math.pow(2, pow++)

    }
    console.log(result);
}

binaryToDecimal('10011011');