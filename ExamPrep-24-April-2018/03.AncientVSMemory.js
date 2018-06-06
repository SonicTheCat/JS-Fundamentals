function ancientVsMemory(input) {
    let arr = input.join(" ").split(" ").filter(e => e !== "");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '32656' && arr[i + 1] === '19759' && arr[i + 2] === '32763') {
            let size = +arr[i + 4];
            let result = arr.slice(i + 6, i + 6 + size);
            let string = "";
            result.forEach(e => string += String.fromCharCode(Number(e)));
            console.log(string);
        }
    }
}

ancientVsMemory([
    '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
]);