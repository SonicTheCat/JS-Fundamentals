function buildWall(arr) {
   arr = arr.map(Number);
   let totalConcrete = [];

    while (true) {
        let flag = false;
        let concrete = 0;
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];
            if (element < 30) {
                element++;
                flag = true;
                concrete+=195;
                arr[i] = element;
            }
        }
        if (flag === false) {
            break;
        }
        totalConcrete.push(concrete);
    }
    console.log(totalConcrete.join(", "));
    console.log(totalConcrete.reduce((a,b) => a + b) * 1900 + " pesos");
}

buildWall(['21', '25', '28']);