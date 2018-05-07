function fruitOrVeg(input) {
    let fruits = ["banana","apple","kiwi","cherry","lemon","grapes","peach"];
    let vegetables =["tomato","cucumber","pepper","onion","garlic","parsley"];

    for (let fruit of fruits) {
        if (fruit === input){
            return  "fruit";
        }
    }

    for (let vegi of vegetables) {
        if (vegi === input){
            return "vegetable";
        }
    }

    return "unknown";
}

console.log(fruitOrVeg("kiwi"));