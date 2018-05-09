function treasureLocator(input) {
    let tuvaluIsland = {x1: 1, x2: 3, y1: 1, y2: 3};
    let tokelauIsland = {x1: 8, x2: 9, y1: 0, y2: 1};
    let samoaIsland = {x1: 5, x2: 7, y1: 3, y2: 6};
    let tongaIsland = {x1: 0, x2: 2, y1: 6, y2: 8};
    let cookIsland = {x1: 4, x2: 9, y1: 7, y2: 8};

    for (let i = 0; i < input.length; i += 2) {
        let x = input[i];
        let y = input[i + 1];

        let message = isOnIsland(x, y);
        console.log(message);
    }

    function isOnIsland(x, y) {
        if ((x >= tuvaluIsland.x1 && x <= tuvaluIsland.x2) && (y >= tuvaluIsland.y1 && y <= tuvaluIsland.y2)) {
            return "Tuvalu";
        } else if ((x >= tokelauIsland.x1 && x <= tokelauIsland.x2) && (y >= tokelauIsland.y1 && y <= tokelauIsland.y2)) {
            return "Tokelau";
        } else if ((x >= samoaIsland.x1 && x <= samoaIsland.x2) && (y >= samoaIsland.y1 && y <= samoaIsland.y2)) {
            return "Samoa";
        } else if ((x >= tongaIsland.x1 && x <= tongaIsland.x2) && (y >= tongaIsland.y1 && y <= tongaIsland.y2)) {
            return "Tonga";
        } else if ((x >= cookIsland.x1 && x <= cookIsland.x2) && (y >= cookIsland.y1 && y <= cookIsland.y2)) {
            return "Cook";
        }
            return "On the bottom of the ocean";
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
