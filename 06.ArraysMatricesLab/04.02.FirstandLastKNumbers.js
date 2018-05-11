function firstAndLastElements(arr) {
    let k = arr.shift();
    let firstElements = [];
    let lastElements = [];
    for (let i = 0; i < k; i++){
        firstElements.push(arr[i]);
        lastElements.unshift(arr[arr.length-i-1])
    }
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));
}

firstAndLastElements([2,7,8,9]);