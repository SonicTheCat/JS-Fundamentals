function firstAndLastElements(arr) {
    let k = arr.shift();
    let elements = [];
    for (let i = 0; i < k; i++){
        elements.push(arr[i]);
    }
    console.log(elements.join(" "));

    elements.length = 0;
    let counter = 0;
    while(counter++ < k){
        elements.unshift(arr.splice(-1));
    }
    console.log(elements.join(" "));
}

firstAndLastElements([2,7,8,9]);