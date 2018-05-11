function biggestNum(matrix) {
   let biggest = -Infinity;

   matrix.forEach(
       row => row.forEach(
           e => biggest = Math.max(biggest,e)));
   return biggest;
}

console.log(biggestNum(
    [[20111, 50, 10],
        [8, 33, 145]]
));