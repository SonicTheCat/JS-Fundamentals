 function drawSquare(num) {

    if (num == 2) {
        console.log("+++");
        return;
    }

    let cols = ((2*num)-1)-3;
    let rows = num;

    let square = "";

    if (num%2==0) {
        rows = num-1;
    }

    for (let row = 1; row <=rows; row++){
        let spacesAndDashes = " ";
        let columnsAndPluses = "|";
          if (row == 1 || row == Math.round(rows/2) || row == rows) {
              spacesAndDashes="-";
              columnsAndPluses = "+";
          }
          square+=columnsAndPluses;
        for (let col = 0; col < cols; col++){
             if (cols/2 == col) {
                 square+=columnsAndPluses;
             }
             square+=spacesAndDashes;
        }
        square+=columnsAndPluses + "\n";
    }
    console.log(square);
}

drawSquare(2);
drawSquare(3);
drawSquare(4);
drawSquare(5);
drawSquare(6);
drawSquare(7);
