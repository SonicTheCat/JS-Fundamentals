function drawHelix(n) {
    let letters = "ATCGTTAGGG";
    let length = letters.length;
    let currentLetter = 0;

    for (let i = 0; i < n; i++) {
        let row = i % 4;

        switch (row) {
            case 0:
                console.log("**" + letters[currentLetter++ % length] + letters[currentLetter++ % length] + "**");
                break;
            case 1:
            case 3:
                console.log("*" + letters[currentLetter++ % length] + "--" + letters[currentLetter++ % length] + "*");
                break;
            case 2:
                console.log(letters[currentLetter++ % length] + "----" + letters[currentLetter++ % length]);
                break;
        }
    }
}

drawHelix(10);