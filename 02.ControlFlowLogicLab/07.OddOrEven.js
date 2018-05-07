function isOddOrEven(num) {
    if (num % 1 !== 0){
        return "invalid";
    }

    return(num % 2 == 0 ? "even" : "odd");
}

console.log(isOddOrEven(3));