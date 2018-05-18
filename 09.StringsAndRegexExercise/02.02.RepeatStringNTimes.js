function repeat(str, times) {
    let repeatStr = "";
    for (let i = 0; i < times; i++) {
        repeatStr += str;
    }
    console.log(repeatStr);
}

repeat("repeat", 5);
repeat("magic is real",5);