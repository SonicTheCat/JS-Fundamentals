function addAndRemoveElements(arr) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            myArr.push(i+1)
        } else {
           myArr.pop();
        }
    }
  if (myArr[0] == null) {
      console.log("Empty");
  } else{
        myArr.forEach(e => console.log(e));
  }
}

addAndRemoveElements(["remove"]);