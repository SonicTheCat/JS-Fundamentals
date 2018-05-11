function lastElements(n, prevElements) {
    let arr = [1];
    let newArr = [];

    for (let i = 1; i < n; i++){
        let sum = 0;
        newArr = arr.slice(-prevElements);
        for (let num of newArr) {
            sum += num;
        }
        arr.push(sum);
    }
    console.log(arr);
}

lastElements(8,2);