function modifyNumber(number) {

    let avg = findAverage(number);

    if (avg > 5) {
        return number;
    } else {
        number = addDigit(number);
    }
    return modifyNumber(number);

    function addDigit(number) {
        number = number + "9";

        return +number;
    }

    function findAverage(number) {
        let avg = 0;
        let counter = 0;
        while (number > 0) {
            counter++;
            avg += number % 10;
            number = Math.floor(number / 10);
        }
        return avg / counter;
    }
}

console.log(modifyNumber(101));