function distanceObjects(input) {

        let dist1= (input[0] / 3.6) * input[2];
        console.log(dist1);
        let dist2= (input[1] / 3.6) * input[2];
        console.log(dist2);
        let delta = Math.abs(dist1- dist2);
        console.log(delta);
}

distanceObjects([11,10,120]);