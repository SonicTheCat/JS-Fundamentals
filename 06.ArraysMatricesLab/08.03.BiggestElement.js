let biggest = matrix =>
    Math.max.apply(null, matrix.reduce((a, b) => a.concat(b)));

console.log(biggest[[20, 50, 10], [8, 33, 145]]);