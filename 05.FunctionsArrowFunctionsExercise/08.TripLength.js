function tripLegth([x1, y1, x2, y2, x3, y3]) {
    let pointOne = {x: x1, y: y1};
    let pointTwo = {x: x2, y: y2};
    let pointThree = {x: x3, y: y3};

    let pointOneToPointTwo = distanceBetweenPoints(pointOne, pointTwo);
    let pointTwoToPointThree = distanceBetweenPoints(pointTwo, pointThree);
    let pointOneToPointThree = distanceBetweenPoints(pointOne, pointThree);

    if (pointOneToPointTwo + pointTwoToPointThree <= pointTwoToPointThree + pointOneToPointThree) {
        console.log(`1->2->3: ${pointOneToPointTwo + pointTwoToPointThree}`)
    } else if (pointOneToPointTwo + pointOneToPointThree < pointTwoToPointThree + pointOneToPointThree) {
        console.log(`2->1->3: ${pointOneToPointTwo + pointOneToPointThree}`)
    } else {
        console.log(`1->3->2: ${pointTwoToPointThree + pointOneToPointThree}`)
    }

    function distanceBetweenPoints(firstCoordinates, secondCoordinates) {
        let distance = Math.sqrt(Math.pow(firstCoordinates.x - secondCoordinates.x, 2) +
            Math.pow(firstCoordinates.y - secondCoordinates.y, 2));

        return distance;
    }
}

tripLegth([0, 0, 2, 0, 4, 0]);
tripLegth([5, 1, 1, 1, 5, 4]);
