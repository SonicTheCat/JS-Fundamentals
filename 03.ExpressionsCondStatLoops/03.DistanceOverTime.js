function distanceObjects(input) {
        let dist1= Number(input[0] * 1000);
        let dist2= Number(input[1] * 1000);
        let time = Number(input[2]/3600);
        let result = Math.abs(dist1 * time - dist2 * time);
        console.log(result);
}

distanceObjects([11,10,120]);
