function lastElements(n, prevElements) {
    let arr = [1];

    for (let i = 0; i < n; i++) {
        let start = Math.max(0, i - prevElements);
        let lastThree = arr.slice(start);
        let sum = lastThree.reduce((a,b) => a + b);

        arr[i] = sum;
    }
    console.log(arr.join(" "));
}

lastElements(8, 2);