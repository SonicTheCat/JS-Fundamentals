function swapElements(myArr) {
    let newArr = [];

    for (let num of myArr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
   console.log(newArr.join("\n"));
}
swapElements([7, -2, 8, 9]);