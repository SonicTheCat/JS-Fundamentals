function biggestNum(input) {
    let biggest = -Infinity;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > biggest) {
            biggest = input[i];
        }
    }
    console.log(biggest);
}

biggestNum([130,5,99]);