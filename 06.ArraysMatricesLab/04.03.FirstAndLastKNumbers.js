function firstAndLastElements(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k).join(" "));
    console.log(arr.slice(-k).join(" "));
}

firstAndLastElements([2,7,8,9]);