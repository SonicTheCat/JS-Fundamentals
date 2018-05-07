function conesVolume(r,h) {

    let volume = Math.PI * r * r * (h/3);
    let area = Math.PI * r * (r + Math.sqrt(Math.pow(h,2)+ Math.pow(r,2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

conesVolume(3,5);