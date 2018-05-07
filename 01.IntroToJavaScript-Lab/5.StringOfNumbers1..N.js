function numbers(n) {
    let num = Number(n);
    let result = "";

    for (var i = 1; i <= n; i++) {
        result += i;
    }

    console.log(result);
}

numbers(11);