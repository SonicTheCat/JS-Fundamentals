function distanceBetweenTwoPoints(x1, y1, x2, y2) {

    let firstPoint = {x:x1, y:y1};
    let secondPoint = {x:x2, y:y2};

    let distance = Math.pow(firstPoint.x - secondPoint.x, 2) + Math.pow(firstPoint.y - secondPoint.y, 2);

    distance = Math.sqrt(distance);

    console.log(distance)
}

distanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985);