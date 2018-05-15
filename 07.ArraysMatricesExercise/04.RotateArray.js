function rotateArray(arr) {
    let countOfRotations = Number(arr.pop());
    let n = countOfRotations % arr.length;
    for (let i = 0; i < n; i++) {
        let num = arr.pop();
        arr.unshift(num);
    }
    console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", "5", "22",]);
