function medenkas(arr) {

    let whiteVictor = 0;
    let darkNaskor = 0;
    let countDark = 0;
    let countWhite = 0;
    let prevDark = "";
    let prevWhite = "";

    for (let i = 0; i < arr.length; i++) {
        let splitInput = arr[i].split(/\s+/);
        
        let power = Number(splitInput[0]);
        let medenkaColor = splitInput[1];

        if (medenkaColor === "dark") {
            if (power !== prevDark && darkNaskor !== 0) {
                countDark = 1;
            } else {
                countDark++;
            }
            if (countDark % 5 === 0) {
                darkNaskor += ((power * 60) * 4.5);
            } else {
                darkNaskor += power * 60;
            }
            prevDark = power;
        }
        if (medenkaColor === "white") {
            if (power !== prevWhite && whiteVictor !== 0) {
                countWhite = 1;
            } else {
                countWhite++;
            }
            if (countWhite % 2 === 0) {
                whiteVictor += ((power * 60) * 2.75);
            } else {
                whiteVictor += power * 60;
            }
            prevWhite = power;
        }
    }
    if (whiteVictor > darkNaskor) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${whiteVictor}`);
    } else {
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${darkNaskor}`);
    }
}

medenkas([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',

]);
