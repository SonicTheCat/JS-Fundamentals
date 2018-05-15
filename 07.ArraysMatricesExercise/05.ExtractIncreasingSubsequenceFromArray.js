function addIncreasingNumbers(arr) {
    let biggerNum = -Infinity;

    arr.forEach(e => {
        if (e >= biggerNum) {
            biggerNum = e;
            console.log(e)
        }
    });
}

addIncreasingNumbers([1,5,4,21,22,8,11,43,101,1000,-14]);