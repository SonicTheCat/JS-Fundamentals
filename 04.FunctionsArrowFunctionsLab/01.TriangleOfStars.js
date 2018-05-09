function triangle(n) {
    function printStars(count) {
        console.log("*".repeat(count))
    }

    for (let i = 1; i <= n; i++) {
        printStars(i);
    }
    for (let i = n - 1; i > 0; i--) {
        printStars(i)
    }
}

console.log(triangle(5));
