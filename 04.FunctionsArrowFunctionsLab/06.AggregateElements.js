function aggregateElements(arr) {
    function aggregate(elements, start, func) {
        for (let i = 0; i < elements.length; i++) {
            start = func(start, arr[i]);
        }
        console.log(start);
    }
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1/b);
    aggregate(arr, "", (a, b) => a + b);
}

aggregateElements([1, 2, 3]);