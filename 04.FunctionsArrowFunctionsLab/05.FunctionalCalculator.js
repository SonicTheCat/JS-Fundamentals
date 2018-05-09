function calculate(a, b, operator) {

    let calc = function (a, b, symbol) {
        return symbol(a, b)
    };

    let add = function (a, b) {
        return a + b
    };
    let subs = function (a, b) {
        return a - b
    };
    let mult = function (a, b) {
        return a * b
    };
    let divide = function (a, b) {
        return a / b
    };

    switch (operator) {
        case"+":
            return calc(a, b, add);
        case"-":
            return calc(a, b, subs);
        case"*":
            return calc(a, b, mult);
        case"/":
            return calc(a, b, divide);
        case"%":
            return calc(a, b, pael);
    }

}

console.log(calculate(2, 4, "*"));
