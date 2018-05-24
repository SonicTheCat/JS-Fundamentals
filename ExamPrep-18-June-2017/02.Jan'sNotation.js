function ianNotations(input) {
    let arr = [];
    let symbols = ["+", "-", "*", "/"];

    for (let element of input) {
        if (!symbols.find(n => n === element)) {
            arr.push(Number(element));
            continue;
        }
        if (arr.length < 2) {
            return "Error: not enough operands!";
        }

        let num2 = arr.pop();
        let num1 = arr.pop();
        let sum = calculate(num1, num2, element);

        arr.push(sum);

    }
    if (arr.length > 1) {
       return "Error: too many operands!";
    } else {
        return arr.join("");
    }

    function calculate(num1, num2,element) {
        return element === "*" ?
            num1 * num2 : element === "/" ?
                num1 / num2 : element === "+" ?
                    num1 + num2 : num1 - num2;
    }
}

console.log(ianNotations([20, 3, 4, '*', '-']));

