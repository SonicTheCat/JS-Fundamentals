function coocking(input) {
    [number, actionOne, actionTwo, actionThree, actionFour, actionFive] = input;
   number = Number(number);
   let chop = (num) => num/2;
   let dice = (num) => Math.sqrt(num);
   let spice = (num) => ++num;
   let bake = (num) => num * 3;
   let fillet = (num) => num * 0.80;

    for (let action of [actionOne, actionTwo, actionThree, actionFour, actionFive]) {
        if (action == "chop") {
            number = chop(number);
        } else if (action =="dice") {
            number = dice(number);
        }  else if (action =="spice") {
            number = spice(number);
        } else if (action =="bake") {
            number = bake(number);
        } else if (action =="fillet") {
            number = fillet(number);
        }
        console.log(number);
    }
}

coocking([9, "dice", "spice", "chop", "bake", "fillet"]);