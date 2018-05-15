let printSeq = arr => arr.filter((e, i) => e >= Math.max(...arr.slice(0, i + 1))).join("\n");

console.log(printSeq([6, 16, 9, 99, 1, 120]));