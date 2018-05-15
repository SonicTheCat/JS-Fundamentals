function rotateArray(arr) {
    let n = Number(arr.pop()) % arr.length;

    for (let i = 0; i < n; i++) {
        let last = arr[arr.length - 1];
        for (let j = arr.length - 1; j >= 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
    console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", "5", "22",]);
