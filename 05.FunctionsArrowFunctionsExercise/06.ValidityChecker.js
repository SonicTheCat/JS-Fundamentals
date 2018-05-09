function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let firstFromStart = findDistance(x1, y1, 0,0);
    isValid(firstFromStart, x1, y1, 0,0);
    let secondFromStart = findDistance(0,0, x2,y2);
    isValid(secondFromStart, x2, y2, 0,0);
    let betweenPoints = findDistance(x1,y1,x2,y2);
    isValid(betweenPoints, x1,y1,x2,y2);

    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    function isValid(distance, x1, y1, x2, y2) {
        let rounded = Math.round(distance);
        if (distance === rounded) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}
validityChecker([3, 0, 0, 4]);
