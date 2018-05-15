function printArray(arr) {
  let delimiter = arr.pop();
  console.log(arr.join(delimiter));
}

printArray(["One","Two","Three","Four","Five","-"]);