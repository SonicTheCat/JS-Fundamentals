function chessboard(num) {
    let html = "<div class=\"chessboard\">\n";

    for (let i = 1; i <=num; i++) {
        html +=" <div>\n";
        let color = (i%2 == 0) ? "white" : "black";

        for (let j = 1; j <=num; j++) {
            html+= ` <span class="${color}"></span>\n`;
            color = (color=="white") ? "black" : "white";
        }
        html +=" </div>\n";
    }
    html +="</div>";

return html;
}

console.log(chessboard(3));