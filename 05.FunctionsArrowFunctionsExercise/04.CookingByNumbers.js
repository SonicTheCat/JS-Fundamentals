function operationsWithNumber(commands) {
    let number = commands[0];
    for (let i = 1; i < commands.length; i++) {
        switch (commands[i]) {
            case "chop":
                number = number / 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number = number + 1;
                break;
            case "bake":
                number = number * 3;
                break;
            case "fillet":
                number = number * 0.80;
        }
        console.log(number)
    }
}

operationsWithNumber([9, "dice", "spice", "chop", "bake", "fillet"]);