function distanceBetweenPoints([x1,y1,z1,x2,y2,z2]) {

    let distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2) + Math.pow(z2-z1,2));
    console.log(distance);
}

distanceBetweenPoints([3.5, 0, 1, 0, 2, -1]);