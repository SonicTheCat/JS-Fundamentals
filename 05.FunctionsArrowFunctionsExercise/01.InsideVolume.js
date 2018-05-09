function isPointInsideBox(coordinates) {
    for (let i = 0; i < coordinates.length; i += 3) {
        let x = coordinates[i];
        let y = coordinates[i + 1];
        let z = coordinates[i + 2];

        if (inVolume(x,y,z)) {
            console.log("inside");
        }
        else{
            console.log("outside");
        }
    }

    function inVolume(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2)) {
            return true;
        }
        return false;
    }
}

isPointInsideBox([8, 20, 22]);
isPointInsideBox([13.1, 50, 31.5]);
isPointInsideBox([50, 80, 50]);
isPointInsideBox([-5, 18, 43]);