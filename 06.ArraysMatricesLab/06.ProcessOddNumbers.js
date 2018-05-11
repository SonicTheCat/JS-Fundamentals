function oddNumbers(numbers) {
    console.log(numbers.filter((n, i) => i % 2 != 0).map(e => e * 2).reverse());
}

oddNumbers([10,15,20,25]);
oddNumbers([3, 0, 10, 4, 7, 3]);