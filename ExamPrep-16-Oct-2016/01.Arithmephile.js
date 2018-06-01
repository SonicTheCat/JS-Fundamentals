function arithmephile(input) {
    input = input.map(Number);
    let arrResult = [];

    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        if (num >= 0 && num < 10) {
            let sum = 1;
            for (let j = 1; j <= num; j++) {
                sum = sum * input[i + j]
            }
            arrResult.push(sum);
        }
    }
    arrResult.sort((a, b) => b - a).filter((a, i) => {
        if (i === 0) {
            console.log(a);
        }
    })
}

arithmephile([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24']);