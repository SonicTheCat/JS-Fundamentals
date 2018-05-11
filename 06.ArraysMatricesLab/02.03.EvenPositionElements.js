function getEvenIndexElement(arr) {
    console.log(arr.filter((e, i) => i % 2 == 0).join(" "));
}
getEvenIndexElement(['20', '30', '40']);