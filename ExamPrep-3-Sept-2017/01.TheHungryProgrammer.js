function calculateMeals(meals, args) {
    let portionsEaten = 0;
    for (let i = 0; i < args.length; i++) {
        let currentCommand = args[i].split(' ');
        if (currentCommand == "End") {
            break;
        }
        switch (currentCommand[0]) {
            case "Serve": {
                if (meals.length < 1) {
                    break;
                }
                console.log(`${meals.pop()} served!`);
                break;
            }
            case "Add":
                if (currentCommand[1] == undefined) break;
                meals.unshift(currentCommand[1]);
                break;
            case "Shift":
                shiftPlates(currentCommand[1], currentCommand[2], meals);
                break;
            case "Eat":
                if (meals.length < 1) {
                    break;
                }
                console.log(`${meals.shift()} eaten`);
                portionsEaten++;
                break;
            case "Consume":
                portionsEaten += consumeMeals(currentCommand[1], currentCommand[2], meals);
                break;
        }
    }
    if (meals.length > 0) {
        console.log(`Meals left: ${meals.join(', ')}`);
    } else {
        console.log("The food is gone");
    }

    console.log(`Meals eaten: ${portionsEaten}`);

    function shiftPlates(first, second, arr) {
        let firstIndex = Number(first);
        let secondIndex = Number(second);
        if (arr[firstIndex] != undefined && arr[secondIndex] != undefined) {
            let firstMeal = arr[firstIndex];
            arr[firstIndex] = arr[secondIndex];
            arr[secondIndex] = firstMeal;
        }
    }

    function consumeMeals(first, second, arr) {
        let firstIndex = Number(first);
        let secondIndex = Number(second);
        if (arr[firstIndex] != undefined && arr[secondIndex] != undefined) {
            let count = secondIndex - firstIndex + 1;
            arr.splice(firstIndex, count);
            console.log("Burp!");
            return count;
        } else {
            return 0;
        }
    }
}
calculateMeals(
    ['bacon', 'veggies', 'chicken'],
        ["Consume 2 9",
        "Eat",
        "End"]
);