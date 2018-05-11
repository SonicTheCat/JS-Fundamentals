function getEvenIndexElement(arr) {
 for (let i = arr.length-1; i >=0; i--){
      if (i % 2 != 0) {
          arr.splice(i,1);
      }
 }
 console.log(arr.join(" "));
}

getEvenIndexElement(['20', '30', '40']);